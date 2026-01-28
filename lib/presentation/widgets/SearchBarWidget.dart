import 'package:flutter/material.dart';

class SearchbarWidget extends StatefulWidget {

  final Function(String) onSearch;
  final Function onClear;

  const SearchbarWidget({
    super.key,
    required this.onSearch,
    required this.onClear,
  });

  @override
  State<SearchbarWidget> createState() => _SearchbarWidgetState();
}

class _SearchbarWidgetState extends State<SearchbarWidget> {
  final TextEditingController _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: TextField(
        controller: _controller,
        decoration: InputDecoration(
          hintText: 'Busca tu superhéroe favorito...',
          prefixIcon: const Icon(Icons.search),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          suffixIcon: IconButton(
            icon: const Icon(Icons.clear),
            onPressed: () {
              _controller.clear();
              widget.onClear();
            },
          ),
        ),
        onChanged: (value) {
          if(value.length >= 2) {
            widget.onSearch(value);
          }
        },
      ),
    );
  }
}
