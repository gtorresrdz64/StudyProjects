import 'package:flutter/material.dart';
import 'package:superhero_bloc_course/data/models/SuperheroBasic.dart';

class SuperheroCard extends StatelessWidget {

  final SuperheroBasic superhero;

  const SuperheroCard({super.key, required this.superhero});

  @override
  Widget build(BuildContext context) {
    return Card(
        elevation: 4,
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        child: ListTile(
          leading: Hero(
            tag: superhero.id,
            child: ClipRRect(
              borderRadius: BorderRadiusGeometry.circular(12),
              child: Image.network(
                superhero.imageUrl,
                width: 50,
                height: 50,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) =>
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.grey[300],
                      child: const Icon(Icons.person, size: 30,),
                    ),
              ),
            ),
          ),
          title: Text(superhero.name,
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        ),
    );
    }
}
