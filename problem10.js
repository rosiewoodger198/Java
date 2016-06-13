      // 10. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.


      function gimmeAPrize(door) {
        if (door === 1) {
          return alert("$6000");
        } else if (door === 2) {
          return alert("$8");
        } else if (door === 3) {
          return alert("$150");
        }
      }

      gimmeAPrize(3);

      