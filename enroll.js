(function () {
  var form = document.getElementById("enroll-form");
  var status = document.getElementById("enroll-status");
  if (!form || !status) return;

  function show(message) {
    status.hidden = false;
    status.textContent = message;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var phone = document.getElementById("phone_number").value.trim();
    var agreed = document.getElementById("sms_opt_in").checked;

    if (!phone) {
      show("Enter the mobile phone number you want Agent John Smith to text.");
      return;
    }
    if (!agreed) {
      show("Check the box to agree to receive Agent John Smith text messages.");
      return;
    }

    show(
      "Your messaging app should open with START addressed to (301) 900-3525. " +
        "If it doesn't, text START to (301) 900-3525 from " +
        phone +
        ", then reply Y when asked to confirm."
    );
    window.location.href = "sms:+13019003525?&body=START";
  });
})();
