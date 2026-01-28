import 'package:equatable/equatable.dart';
import 'package:superhero_bloc_course/data/models/SuperheroBasic.dart';

abstract class SuperheroSearchState extends Equatable{
  const SuperheroSearchState();

  @override
  List<Object> get props=> [];
}

class SuperheroSearchInitialState extends SuperheroSearchState{
  const SuperheroSearchInitialState();
}

class SuperheroSearchLoadingState extends SuperheroSearchState{
  const SuperheroSearchLoadingState();
}

class SuperheroSearchLoadedState extends SuperheroSearchState {
  final List<SuperheroBasic> superheroes;
  const SuperheroSearchLoadedState(this.superheroes);
  @override
  List<Object> get props => [superheroes];
}

class SuperheroSearchErrorState extends SuperheroSearchState {
  final String message;
  const SuperheroSearchErrorState(this.message);
  @override
  List<Object> get props => [message];
}

class SuperheroSearchEmptyState extends SuperheroSearchState {
  const SuperheroSearchEmptyState();
}
