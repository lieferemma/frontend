import 'package:flutter/material.dart';
import 'package:EmmaLiefert/customer/customer_main.dart';
//import 'package:EmmaLiefert/driver/driver_main.dart';
import 'package:EmmaLiefert/owner/owner_main.dart';
//import 'package:EmmaLiefert/planner/planner_main.dart';

void main() {
  runApp(EmmaLiefert());
}

class EmmaLiefert extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final title = 'replace with login';

    return MaterialApp(
      title: title,
      home: Builder(
          builder: (context) => Scaffold(
          appBar: AppBar(
            title: Text(title),
          ),
          body: ListView(
            children: <Widget>[
              ListTile(
                leading: Icon(Icons.map),
                title: Text('Customer'),
                onTap: (){
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => EmmaLiefertCustomer()),
                  );
                },                
              ),
              ListTile(
                leading: Icon(Icons.photo_album),
                title: Text('Driver'),
              ),
              ListTile(
                leading: Icon(Icons.phone),
                title: Text('Owner'),
                onTap: (){
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => EmmaLiefertOwner()),
                  );
                }, 
              ),
              ListTile(
                leading: Icon(Icons.phone),
                title: Text('Planner'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
