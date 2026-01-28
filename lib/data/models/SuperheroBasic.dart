import 'package:equatable/equatable.dart';

class SuperheroBasic extends Equatable{

  final String id;
  final String name;
  final String imageUrl;

  const SuperheroBasic({
    required this.id,
    required this.name,
    required this.imageUrl,
  });

  factory SuperheroBasic.fromJson(Map<String, dynamic> json){
    return SuperheroBasic(
        id: json['id'],
        name: json['name']??'Unknown Hero',
        imageUrl: json['image']?['url']??'',
    );
  }

  @override
  // TODO: implement props
  List<Object?> get props => [id, name, imageUrl];

}

class SuperheroResponse extends Equatable {
  final String response;
  final List<SuperheroBasic> results;
  final String error;

  const SuperheroResponse({
    required this.response,
    required this.results,
    required this.error,
  });

  factory SuperheroResponse.fromJson(Map<String,dynamic> json) {
    return SuperheroResponse(
        response: json['response']??'',
        results: json['results']!= null
            ? (json['results'] as List)
            .map((i)=> SuperheroBasic.fromJson(i))
            .toList()
            : [],
        error: json['error']??'',
    );
  }

  @override
  // TODO: implement props
  List<Object?> get props => [response, results, error];

}