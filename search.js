<script>
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const matchCards = document.querySelectorAll(".match-card-link");

    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();

      matchCards.forEach(card => {
        const teamNames = card.querySelectorAll(".team-name");
        let matchFound = false;

        teamNames.forEach(team => {
          if (team.textContent.toLowerCase().includes(query)) {
            matchFound = true;
          }
        });

        card.style.display = matchFound ? "block" : "none";
      });
    });
  });
</script>
