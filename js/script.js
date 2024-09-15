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
  const tooltip = document.getElementById(
    "tooltip-copy-npm-install-copy-button"
  );

  // Show tooltip on hover
  copyButton.addEventListener("mouseenter", function () {
    tooltip.classList.remove("invisible", "opacity-0");
    tooltip.classList.add("opacity-100");
  });

  // Hide tooltip when mouse leaves
  copyButton.addEventListener("mouseleave", function () {
    tooltip.classList.add("invisible", "opacity-0");
  });

  // Handle copy to clipboard action
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
          tooltip.classList.add("invisible", "opacity-0");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
