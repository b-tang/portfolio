document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded successfully!");
});

document
  .querySelector("button[data-copy-to-clipboard-target]")
  .addEventListener("click", function () {
    const targetInputId = this.getAttribute("data-copy-to-clipboard-target");
    const targetInput = document.getElementById(targetInputId);

    // Copy the input value to clipboard
    navigator.clipboard.writeText(targetInput.value);

    // Tooltip messages
    const tooltip = document.getElementById("tooltip-copy-npm-install");
    const defaultMessage = document.getElementById("default-tooltip-message");
    const successMessage = document.getElementById("success-tooltip-message");

    // Swap messages
    defaultMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");

    // Show tooltip
    // tooltip.classList.remove("invisible", "opacity-0");
    // tooltip.classList.add("visible", "opacity-100");

    // Swap button icon and message
    const defaultMessageSpan = document.getElementById("default-message");
    const successMessageSpan = document.getElementById("success-message");
    defaultMessageSpan.classList.add("hidden");
    successMessageSpan.classList.remove("hidden");

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      // tooltip.classList.add("invisible", "opacity-0");
      // tooltip.classList.remove("visible", "opacity-100");

      // Reset messages and icons
      defaultMessage.classList.remove("hidden");
      successMessage.classList.add("hidden");
      defaultMessageSpan.classList.remove("hidden");
      successMessageSpan.classList.add("hidden");
    }, 2000);
  });
