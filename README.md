
# App de E-Commerce para Comision 50185 de Federico Cipolletta

Descripcion general: 

La App esta organizada en Screens con Componentes, usando TabNavigator. Tiene conexion a Firebase de donde obtiene los productos ordenados por categoria, y tambien almacena los datos de usuario, incluyendo mail, direccion obtenida con GoogleApi y las ordenes realizadas. Usa SQLite local para mantener la sesion de usuario activa aunque se cierre la App.


Descripcion de algunos componentes

| Componente | Descripcion |
| ----------- | ----------- |
| Login | Para loguearse si el usuario ya tiene cuenta (usa firebase). El usuario se guarda en la db Local con SQLite para mantener la sesion iniciada si se cierra la App |
| Signup | Para crear una cuenta nueva|
| Navigator | Es un tab navigator, con Shpo, Cart, Orders y profile |
| Tab: Shop | Componente Categories -> Muestra categorias que las trae de firebase |
| Tab: Shop | Componente ItemListCategory -> Muestra los productos que pertenecen a la categoria seleccionada. Permite filtrar con un campo de busqueda |
| Tab: Shop | Componente ItemDetail -> Muestra el detalle del producto seleccionado, y permite "Agregar al carrito" |
| Tab: Cart | Muestra lista de productos agregados, suma total de precios, y permite finalizar la compra. Se pueden eliminar items individualmente |
| Tab: Orders | Muestra ordenes ya realizadas |
| Tab: Profile | Componente "Profile" -> Muestra direccion de mail de usuario, y permite agregar domicilio. Tambien permite desloguearse  |
| Tab: Profile | Componente "Address" -> Confirma direccion obtenida mediante GoogleApi  |




