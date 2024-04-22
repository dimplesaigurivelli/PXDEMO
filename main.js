

(function (n, t, a, e, co) {
  var i = "aptrinsic"; n[i] = n[i] || function () {
    (n[i].q = n[i].q || []).push(arguments)
  }, n[i].p = e; n[i].c = co;
  var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
  var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-Z57KBTR9DEZC-2");

/*
if(location = "https://dimplesaigurivelli.github.io/pxdemo/visitor.html"){

  aptrinsic("identify",
            {
              id: "visitor"
            },
          )
} */


function aboutGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'about'});

}
function contactGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'contact'});

}
function bmiGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'bmi'});

}


function login() {
  var a = document.getElementById('UserEmail').value;
  

  const accounts = ["1001", "1002", "1003", "1004", "1005","1006"];
  const mailId = ["dimple@gmail.com", "monica@gmail.com", "chandler@gmail.com", "ross@gmail.com", "phoebe@gmail.com","dimplesaig@gmail.com"];

  for (var i = 0; i < accounts.length; i++) {
    if (a == mailId[i]) {
        var userid = mailId[i].substring(4, 9);
        if (a == "dimple@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1001",
              name:"Amazon",
              "firstName": "dimple"

            });

            aptrinsic('set', 'globalContext', {"package": "elite"});

        }
        else if (a == "monica@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1002",
              name:"Cadbury",
              "firstName": "monica"
            });
            aptrinsic('set', 'globalContext', {"package": "elite"});

        }
        else if (a == "chandler@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1003",
              name:"Microsoft",
              "firstName":"chandler"
            });
            aptrinsic('set', 'globalContext', {"package": "premier"});

        }
        else if (a == "ross@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1004",
              name:"Myntra",
              "firstName":"ross"
            });
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }
        else if (a == "phoebe@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },

            {
              id:"1005",
              name:"Tata",
              "firstName":"phoebe"
            }
            );
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }

        else if (a == "dimplesaig@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },

            {
              id:"1006",
              name:"Apple",
              "firstName":"dimple"
            }
            );
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }
        alert("Your Unique Id is : " + " " + userid);
        location = "index.html"
      }

    
    }
  }
  




function message() {
  var email = document.getElementById('email');
  if (email.value === '') {
  }
  else {
    alert("Details saved succesfully!");
    aptrinsic('track', 'userDetails', {"version" :111,"Submitted" : true}); 

  }
}


function calculate() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var bmi;

  var bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi >= 17 & bmi < 18.5) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as THIN, Eat well sweet!');
  }
  else if (bmi >= 18.5 & bmi < 25) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as NORMAL, You are perfect sweet!');
  }
  else if (bmi >= 25 & bmi <= 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OVERWEIGHT, Go gym sweet!');
  }
  else if (bmi > 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OBESE, Go gym sweet!');
  }
}

function logout(){
  aptrinsic('reset');
}




