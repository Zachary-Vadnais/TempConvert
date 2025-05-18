
 let convertToCelsius = {'C' : ('F' - 32) * 5/9.}
 let c = -17.222
 let f = 1
 
let describeTemprature = ('veryCold','cold','warm','hot','veryHot')
 let veryCold = (0)
 let cold = (20)
 let warm = (30)
 let hot = (40)
 let veryHot = (41)
 if (c <= 0) {
    return alert (convertToCelsius + describeTemprature)
}