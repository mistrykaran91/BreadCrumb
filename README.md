# angular-crudder
A schematic project which generates CRUD operation code based on the JSON file.

### Install Schematics
```
npm install angular-crudder
```

Once you install the npm package `angular-crudder`, that will be available through the Angular CLI.

#### Angular Crudder

```
ng generate angular-crudder:angular-crudder --name=<component-name> --schemaPath=<path-of-your-json-file>
```

Running the `angular-crudder` schematic generates a new Angular component files that can be used to get
started with a CRUD operations consisting of:

* Details Component
* Edit Component
* List Component
* Model file
* API service file

Navigation in component's routerLink are written based on the below routes:-
```
  {
    path: '<name>', component: <list-component>
  }
```
```
  {
    path: '<name>/create', component: <edit-component>
  }
```
```
  {
    path: '<name>/:id', component: <details-component>
  }
```
```
  {
    path: '<name>/edit/:id', component: <edit-component>
  }
```

You have to change the api-url in the service file then your CRUD will work.

NOTE:-Currently, it does not import in your app.module files and routing file you have to import it manually.
#### JSON File properties.

Each properties of the JSON file should be the FieldName which you want to be displayed in the form. The FieldName values should contain the metadata about that field. Below are the accepted the value metadata:-
| Name        | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| `isId`      | Field is a primary key/id field, which will be used in component's. Possible values: true/false. Default: false                                                                                  |
| `type`      | Type will be used to generate HTML inputs and if is it group will be used to generate nested forms. Possible values: text|number|radio|select|group                                                 |
| `maxlength` | If the type is text, you use this property to limit the no. of characters.             |
| `required`  | If the field is required                                                               |
| `enum`      | If the type is radio, you can use this property to display the possible values of the radio                                                                                                         |
In case you want to see example of the [Sample](LINK) JSON file.
