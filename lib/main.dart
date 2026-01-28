import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'presentation/pages/home_page.dart';
import 'package:superhero_bloc_course/data/repositories/superhero_repository.dart';
import 'package:superhero_bloc_course/presentation/bloc/superhero_search_bloc.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiRepositoryProvider(
      providers: [
        RepositoryProvider<SuperheroRepository>(
          create: (context) => SuperheroRepository(client: http.Client()),
        ),
      ],
      child: MultiBlocProvider(
        providers: [
          BlocProvider<SuperheroSearchBloc>(
            create: (context) => SuperheroSearchBloc(
              repository: context.read<SuperheroRepository>(),
            ),
          ),
        ],
        child: MaterialApp(
          title: 'Super Hero Search',
          theme: ThemeData(
          primaryColor: Colors.red,
          useMaterial3: true,
        ),
        home: const HomePage(),
        debugShowCheckedModeBanner: false,
      ),
      ),
    );
  }
}
