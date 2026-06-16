function procesarSuma() {
            // Se obtienen los valores de los inputs a través de su ID
            const valor1 = document.getElementById('num1').value;
            const valor2 = document.getElementById('num2').value;

            // Se convierten los valores de texto a números flotantes (para admitir decimales)
            const numero1 = parseFloat(valor1);
            const numero2 = parseFloat(valor2);

            // Se obtiene la referencia al div donde se mostrará el resultado
            const divResultado = document.getElementById('resultado');

            // Se verifica si alguno de los campos está vacío o no es un número válido
            if (isNaN(numero1) || isNaN(numero2)) {
                divResultado.innerHTML = "<span style='color: red;'>Por favor, ingresa un número en ambos campos.</span>";
                return;
            }

            // Se realiza la suma
            const suma = numero1 + numero2;

            // Se inyecta el resultado en el div
            divResultado.innerHTML = "<strong>Resultado:</strong> " + suma;
        }