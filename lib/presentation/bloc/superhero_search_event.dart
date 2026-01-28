import 'package:equatable/equatable.dart';

abstract class SuperheroSearchEvent extends Equatable{
  const SuperheroSearchEvent();

  @override
  List<Object> get props => [];
}

class SearchSuperheroesEvent extends SuperheroSearchEvent {
  final String query;

  const SearchSuperheroesEvent(this.query);

  @override
  List<Object> get props => [query];
}

class ClearSearchEvent extends SuperheroSearchEvent {}