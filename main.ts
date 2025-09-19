/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael
 * Created on: Sep 2025
 * This program Shows temperature
*/

// our variable for a temperature
let temperatureCelsius: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Shows real temperature
input.onButtonPressed(Button.A, function () {
    temperatureCelsius = input.temperature()
    basic.showString('The temperature is:' + (temperatureCelsius).toString())
})
