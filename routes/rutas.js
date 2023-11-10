import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { controllerReservas } from '../controllers/ControladorReservas.js'
//Para poder llamar al controlador
//debo crear un objeto de la clase controladorHabitacion
let controladorHabitacion=new ControladorHabitacion();

export let rutas=express.Router()

rutas.post('/api/habitaciones',controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id',controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id',controladorHabitacion.borrarHabitacion)
//reservas
Routes.get("/obtener/reservas",controllerR.buscar)
Routes.put("/actualizar/reserva/:id",controllerR.modificar)
Routes.delete("/eliminar/reserva/:id",controllerR.eliminar)
Routes.post("/hacer/reserva",controllerR.registrar)
Routes.get("/obtener/reserva/:id",controllerR.buscarEspecifico)