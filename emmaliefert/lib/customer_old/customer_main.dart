import 'package:flutter/material.dart';

import './pages/animated_map_controller.dart';


class EmmaLiefertCustomer extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Map Example',
      theme: ThemeData(
        primarySwatch: mapBoxBlue,
      ),
      home: HomePage(),
      routes: <String, WidgetBuilder>{
      
      },
    );
  }
}

// Generated using Material Design Palette/Theme Generator
// http://mcg.mbitson.com/
// https://github.com/mbitson/mcg
const int _bluePrimary = 0xFF395afa;
const MaterialColor mapBoxBlue = MaterialColor(
  _bluePrimary,
  <int, Color>{
    50: Color(0xFFE7EBFE),
    100: Color(0xFFC4CEFE),
    200: Color(0xFF9CADFD),
    300: Color(0xFF748CFC),
    400: Color(0xFF5773FB),
    500: Color(_bluePrimary),
    600: Color(0xFF3352F9),
    700: Color(0xFF2C48F9),
    800: Color(0xFF243FF8),
    900: Color(0xFF172EF6),
  },
);

/*
import 'package:flutter/material.dart';
import 'package:latlng/latlng.dart';
import 'package:flutter_map/flutter_map.dart';

class EmmaLiefertCustomer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Abholpunkt suchen',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: CustomerHomeSearch()
    );
  }
}

class CustomerHomeSearch extends StatefulWidget {
  @override
  _SearchPickupMapState createState() => _SearchPickupMapState();
}

class _SearchPickupMapState extends State<CustomerHomeSearch> {
  

  @override  
    Widget build(BuildContext context) {
      return new FlutterMap(
        options: new MapOptions(
          center: new LatLng(51.5, -0.09),
          zoom: 13.0,
        ),
        layers: [
          new TileLayerOptions(
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            subdomains: ['a', 'b', 'c']
          ),
          new MarkerLayerOptions(
            markers: [
              new Marker(
                width: 80.0,
                height: 80.0,
                point: new LatLng(51.5, -0.09),
                builder: (ctx) =>
                new Container(
                  child: new FlutterLogo(),
                ),
              ),
            ],
          ),
        ],
      );
    }
}

/// You can enable caching by using [CachedNetworkImageProvider] from cached_network_image package.
class CachedGoogleMapProvider extends MapProvider {
  const CachedGoogleMapProvider();

  @override
  ImageProvider getTile(int x, int y, int z) {
    //Can also use CachedNetworkImageProvider.
    return NetworkImage(
        'https://www.google.com/maps/vt/pb=!1m4!1m3!1i$z!2i$x!3i$y!2m3!1e0!2sm!3i420120488!3m7!2sen!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425');
  }
}


*/



/*
class CustomerHomeSearch extends StatefulWidget {
  @override
  _SearchPickupMapState createState() => _SearchPickupMapState();
}

class _SearchPickupMapState extends State<CustomerHomeSearch> {
  final controller = MapController(
    location: LatLng(35.68, 51.41),
  );

  void _incrementCounter() {
    controller.location = LatLng(35.68, 51.41);
  }

  @override
  Widget build(BuildContext context) {
    final devicePixelRatio = MediaQuery.of(context).devicePixelRatio;
    controller.tileSize = 256 / devicePixelRatio;

    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the CustomerHomeSearch object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text('Map Demo'),
      ),
      body: Map(
        controller: controller,
        provider: const CachedGoogleMapProvider(),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'My Location',
        child: Icon(Icons.my_location),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

/// You can enable caching by using [CachedNetworkImageProvider] from cached_network_image package.
class CachedGoogleMapProvider extends MapProvider {
  const CachedGoogleMapProvider();

  @override
  ImageProvider getTile(int x, int y, int z) {
    //Can also use CachedNetworkImageProvider.
    return NetworkImage(
        'https://www.google.com/maps/vt/pb=!1m4!1m3!1i$z!2i$x!3i$y!2m3!1e0!2sm!3i420120488!3m7!2sen!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425');
  }
}

*/