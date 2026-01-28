import 'package:bloc/bloc.dart';
import 'package:superhero_bloc_course/presentation/bloc/superhero_search_state.dart';
import 'package:superhero_bloc_course/presentation/bloc/superhero_search_event.dart';

import '../../data/repositories/superhero_repository.dart';

class SuperheroSearchBloc
    extends Bloc<SuperheroSearchEvent, SuperheroSearchState> {
  final SuperheroRepository repository;

  SuperheroSearchBloc({required this.repository})
      : super(const SuperheroSearchInitialState()) {
    on<SearchSuperheroesEvent>(_onSearchSuperheroes);
    on<ClearSearchEvent>(_onClearSearch);
  }

  Future<void> _onSearchSuperheroes(SearchSuperheroesEvent event,
      Emitter<SuperheroSearchState> emit,) async {
    if (event.query.isEmpty) {
      emit(const SuperheroSearchEmptyState());
      return;
    }

    emit(const SuperheroSearchLoadingState());

    try {
      final response = await repository.searchSuperheroes(event.query);

      if (response.response == 'error') {
        emit(SuperheroSearchErrorState(response.error));
      } else if (response.results.isEmpty) {
        emit(const SuperheroSearchEmptyState());
      } else {
        emit(SuperheroSearchLoadedState(response.results));
      }
    } catch (e) {
      emit(SuperheroSearchErrorState('Error searching superheroes: $e'));
    }
  }
  Future<void> _onClearSearch(ClearSearchEvent event,
      Emitter<SuperheroSearchState> emit,) async {
    emit(const SuperheroSearchInitialState());
  }
}