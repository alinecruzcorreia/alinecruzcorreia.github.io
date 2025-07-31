function calcular() {
        var valor1 = document.getElementById("valor1").value;
        valor1 = parseInt(valor1);
        var valor2 = document.getElementById("valor2").value;
        valor2 = parseInt(valor2);
        var operation = document.getElementById("operation").value;
        var total;

        switch (operation) {
          case "+":
            total = valor1 + valor2;
            break;
          case "-":
            total = valor1 - valor2;
            break;
          case "*":
            total = valor1 * valor2;
            break;
          case "/":
            total = valor1 / valor2;
            break;
        }

        // se o resultado for infinito
        if (isFinite(total) == false) {
          total = "infinito";
        }

        document.getElementById("total").value = total;
      }