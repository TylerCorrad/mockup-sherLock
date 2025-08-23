function getOTP() {
  return Array.from(document.querySelectorAll(".otp-input"))
    .map((input) => input.value)
    .join("");
}

console.log(getOTP());
