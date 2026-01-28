import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../data/models/SuperheroBasic.dart';
import '../bloc/superhero_search_state.dart';
import '../bloc/superhero_search_bloc.dart';
import '../bloc/superhero_search_event.dart';
import '../widgets/SearchBarWidget.dart';
import '../widgets/superhero_card.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Buscador de Superhéroes'),
        backgroundColor: Colors.red[700],
        foregroundColor: Colors.white,
      ),
      body: Column(
        children: [
          BlocBuilder<SuperheroSearchBloc, SuperheroSearchState>(
            builder: (context, state) {
              return SearchbarWidget(
                onSearch: (query) {
                  context.read<SuperheroSearchBloc>().add(
                    SearchSuperheroesEvent(query),
                  );
                },
                onClear: () {
                  context.read<SuperheroSearchBloc>().add(ClearSearchEvent());
                },
              );
            },
          ),
          Expanded(
            child: BlocBuilder<SuperheroSearchBloc, SuperheroSearchState>(
              builder: (context, state) {
                if (state is SuperheroSearchInitialState) {
                  return _buildInitialState();
                } else if (state is SuperheroSearchLoadingState) {
                  return _buildLoadingState();
                } else if (state is SuperheroSearchErrorState) {
                  return _buildErrorState(state.message);
                } else if (state is SuperheroSearchEmptyState) {
                  return _buildEmptyState();
                } else if (state is SuperheroSearchLoadedState) {
                  return _buildResultsState(state.superheroes);
                }
                return const SizedBox.shrink();
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInitialState() {
    return const Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.search, size: 64, color: Colors.grey),
          SizedBox(height: 16),
          Text(
            'Busca tu superhéroe favorito',
            style: TextStyle(fontSize: 18, color: Colors.grey),
          ),
        ],
      ),
    );
  }

  Widget _buildLoadingState() {
    return const Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CircularProgressIndicator(),
          SizedBox(height: 16),
          Text('Buscando superhéroes...'),
        ],
      ),
    );
  }

  Widget _buildErrorState(String message) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.error, color: Colors.red, size: 64),
          const SizedBox(height: 16),
          Text(
            'Error: $message',
            style: const TextStyle(fontSize: 16, color: Colors.red),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return const Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.search_off, size: 64, color: Colors.grey),
          SizedBox(height: 16),
          Text(
            'No se encontraron superhéroes',
            style: TextStyle(fontSize: 18, color: Colors.grey),
          ),
        ],
      ),
    );
  }

  Widget _buildResultsState(List<SuperheroBasic> superheroes) {
    return ListView.builder(
      itemCount: superheroes.length,
      itemBuilder: (context, index) {
        final superhero = superheroes[index];
        return SuperheroCard(superhero: superhero);
      },
    );
  }
}