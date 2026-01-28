import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:superhero_bloc_course/core/constants.dart';
import 'package:superhero_bloc_course/data/models/SuperheroBasic.dart';

class SuperheroRepository{
  final http.Client client;

  SuperheroRepository({required this.client});

  Future<SuperheroResponse> searchSuperheroes(String query) async {
    try{
      print('Search for $query');

      final response = await client.get(
        Uri.parse('${ApiConstants.baseUrl}${ApiConstants.searchEndpoint}/$query')).timeout(const Duration(seconds: 10));

      if(response.statusCode == 200){
        final Map<String, dynamic> data= json.decode(response.body);
        final superheroResponse = SuperheroResponse.fromJson(data);

        print('Found ${superheroResponse.results.length} heroes');
        return superheroResponse;
      }else{
        throw Exception('HTTP Error: ${response.statusCode}');
      }
    }catch(e){
      print('Error $e');
      throw Exception('Failed to search superheroes: $e');
    }
  }
}