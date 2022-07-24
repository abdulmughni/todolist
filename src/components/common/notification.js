export function notification() {
  return (
    <div class="bg-white p-4 rounded-md border-2 border-red-700">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">
        &times;
      </span>
      Something went wrong please try again
    </div>
  );
}
