document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded successfully!");

  const copyButton = document.querySelector(
    '[data-copy-to-clipboard-target="npm-install-copy-button"]'
  );
  const inputField = document.getElementById("npm-install-copy-button");
  const defaultTooltipMessage = document.getElementById(
    "default-tooltip-message"
  );
  const successTooltipMessage = document.getElementById(
    "success-tooltip-message"
  );
  const defaultIcon = document.getElementById("default-icon");
  const successIcon = document.getElementById("success-icon");

  copyButton.addEventListener("click", function () {
    // Copy text from the input field
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard
      .writeText(inputField.value)
      .then(() => {
        // Show success message in tooltip
        defaultTooltipMessage.classList.add("hidden");
        successTooltipMessage.classList.remove("hidden");
        // Change icon
        defaultIcon.classList.add("hidden");
        successIcon.classList.remove("hidden");

        // Reset tooltip and icon after 2 seconds
        setTimeout(() => {
          defaultTooltipMessage.classList.remove("hidden");
          successTooltipMessage.classList.add("hidden");
          defaultIcon.classList.remove("hidden");
          successIcon.classList.add("hidden");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
