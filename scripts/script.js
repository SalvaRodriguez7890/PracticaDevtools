


botonPrimo.addEventListener("click", function numPrimo(){

    let numero = (document.getElementById("numero").value)

    let boole = true;

    //se inicializa el contador en 2 ya que dividir entre 1 es hacer el codigo mas lento
    //todo se puede dividir entre 1
    cont = 2;

    //Primero compruebo que el numero insertado no sea 1 ni inferior, ya que el primer
    //numero primo es el 2
    if (numero <= 1) {
        resultado.innerHTML = "El número " + numero + " no es primo";
        return;
    }

    //Si el if de antes no entra entramos en un bucle el cual va a empezar a dividir
    //el numero con el contador usando el % de forma al dividir algun numero el resto
    //es 0 significa que ese numero es divisible por otro numero que no sea 1 y el mimo
    //numero, por lo tanto no seria primo.

    //este while comprueba la variable boole siempre sea true y que el contador (inicializado en 2)
    //sea menor que la raiz del numero indicado, ya que su raiz será el ultimo numero que al multiplicarse da
    //como resultado el numero, un numero mayor a su propia raiz dara otro superior
   
    while(boole == true && cont <= (Math.sqrt(numero))){
        if (numero%cont==0){

            //si entramos en este if indicamos a la interfaz que el numero
            //no es primo y para salir del bucle while usamos una variable boolean
            // cambiando su estado.
             resultado.innerHTML = "El número " + numero + " no es primo";
             boole=false;

             console.warn("Se encontró un número divisor a " + numero + " el primer divisor es: " + cont);
        }

        //si no entra en el if anterior simplemente le sumamos 1 al contador para 
        //poder dar otra vuelta y comenzar a dividir otra vez
        cont++;
    }
    //si sale del bucle porque la variable boole esta en true es porque no hemos encontrado ningun divisor
    if(boole == true){
                resultado.innerHTML = "El número " + numero + " es primo";
                console.log("No se encontró ningún número divisor a " + numero);
            }
        })
   

botonComprueba.addEventListener("click",function compruebaNum(){

    //Primero optenemos el valor de los numeros y los parseamos para
    //que la variable sea un nmero y luego no nos de problemas al compararlas.
    //let num1 = parseFloat(document.getElementById("num1").value);
    //let num2 = parseFloat(document.getElementById("num2").value);

     let num1 = "PErro";
     let num2 = "GAto";

     num1 = parseInt(num1);
     num2 = parseInt(num2);

    if(typeof num1 == "NaN" || typeof num2 != "NaN"){
        console.error("Los datos introducidos no son correctos");
        console.warn("Te has equivocado metiendo los datos");
        console.log("Vuelve a intentarlo");

        let errores = [ 
           { id: 1, NombreError: "Te has equivocado en el primero"},
           { id: 2, NombreError: "Te has equivocado en el segundo"}

        ]
        console.table(errores);

        resultado3.innerHTML = "Error de datos";

    }else if (num1==num2){
    resultado3.innerHTML = "Los numeros " + num1 + " y " + num2 + " son iguales";

    }else if (num1>num2) {
        resultado3.innerHTML = "El numero " + num1 + " es mayor que el número " + num2;
    }else{
        resultado3.innerHTML = "El numero " + num2 + " es mayor que el número " + num1;

    }
        
})


//Funcion muy simple para redirigir al usuario a otra web
botonMoodle.addEventListener("click",function moodle() {
    
    let usuario = document.getElementById("user").value;
    let contrasena = document.getElementById("pass").value;
    let resultado = document.getElementById("resultado4");


    let usuarioCorrecto = "usuario"
    let passCorrecta = "1234";

    
    if (usuario === usuarioCorrecto && contrasena === passCorrecta) {
        resultado.style.color = "green";
        resultado.innerHTML = "Validando datos... Redirigiendo a Moodle";

        console.log("Datos correctos, redirigiendo...")
        
        //funcion para que se retarde unos segundos para mandarnos a otra web
       setTimeout(function() {
            window.location.href = "https://educacionadistancia.juntadeandalucia.es/centros/malaga/login/index.php"; 
        }, 3000);
    } else {
       
        resultado.style.color = "red";
        resultado.innerHTML = "Usuario o contraseña incorrectos";
        console.error("Datos erroneos!")
    }
})
