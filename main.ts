basic.showIcon(IconNames.Tortoise)
basic.pause(1000)
basic.forever(function () {
    SuperBit.Servo(SuperBit.enServo.S1, 0)
    SuperBit.Servo(SuperBit.enServo.S2, 0)
    SuperBit.Servo(SuperBit.enServo.S3, 0)
    SuperBit.Servo(SuperBit.enServo.S4, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 0)
    SuperBit.Servo(SuperBit.enServo.S6, 0)
    SuperBit.Servo(SuperBit.enServo.S7, 0)
    SuperBit.Servo(SuperBit.enServo.S8, 0)
    basic.pause(500)
    SuperBit.Servo(SuperBit.enServo.S1, 180)
    SuperBit.Servo(SuperBit.enServo.S2, 180)
    SuperBit.Servo(SuperBit.enServo.S3, 180)
    SuperBit.Servo(SuperBit.enServo.S4, 180)
    SuperBit.Servo(SuperBit.enServo.S5, 180)
    SuperBit.Servo(SuperBit.enServo.S6, 180)
    SuperBit.Servo(SuperBit.enServo.S7, 180)
    SuperBit.Servo(SuperBit.enServo.S1, 180)
    basic.pause(2000)
})
