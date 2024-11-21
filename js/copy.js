document.getElementById('copyButton').addEventListener('click', () => {
    const textToCopy = document.getElementById('textToCopy').textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Replace the icon with a checkmark
            const copyIcon = document.getElementById('copyIcon');
            copyIcon.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-check2" viewBox="0 -1 16 16" id="copyIcon">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            `;

            // Add a success style to the button
            const copyButton = document.getElementById('copyButton');
            copyButton.classList.add('success');

            // Reset the icon after 2 seconds
            setTimeout(() => {
                // Re-query the copyIcon element
                const updatedCopyIcon = document.getElementById('copyIcon');
                updatedCopyIcon.outerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16" id="copyIcon">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                    </svg>
                `;
                copyButton.classList.remove('success');
            }, 2000);
        })
        .catch(err => {
            alert('Failed to copy text: ' + err);
        });
});
