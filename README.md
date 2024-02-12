
# E-Commerce para Comision 50185 de Federico Cipolletta

Descripcion de componentes

| Componente | Descripcion |
| ----------- | ----------- |
| Login | Para loguearse si el usuario ya tiene cuenta (usa firebase). El usuario se guarda en la db Local con SQLite para mantener la sesion iniciada si se cierra la App |
| Signup | Para crear una cuenta nueva|
| Navigator | Es un tab navigator, con Shpo, Cart, Orders y profile |
| Tab: Shop | Componente Categories -> Muestra categorias que las trae de firebase |
| Tab: Shop | Componente ItemListCategory -> Muestra los productos que pertenecen a la categoria seleccionada. Permite filtrar con un campo de busqueda |
| Tab: Shop | Componente ItemDetail -> Muestra el detalle del producto seleccionado, y permite "Agregar al carrito" |
| Tab: Cart | Muestra lista de productos agregados, que se pueden tambien quitar, y permite ejecutar la compra |
| Tab: Orders | Muestra ordenes ya realizadas |
| Tab: Profile | Muestra direccion de mail de usuario, y permite agregar domicilio usando la Api de Location de Google. Tambien permite desloguearse  |



