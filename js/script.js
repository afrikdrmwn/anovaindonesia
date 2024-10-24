// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// SEARCH DISINI
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const searchContainer = document.querySelector(".search-container");

  searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah aksi default dari <a> tag
    // Tampilkan atau sembunyikan kotak pencarian
    searchContainer.style.display =
      searchContainer.style.display === "none" ? "block" : "none";
    // Fokus pada input pencarian
    document.getElementById("search-input").focus();
  });

  // Menangani klik tombol pencarian
  document.getElementById("search-submit").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    const productCards = document.querySelectorAll(".Houseware-card");

    let found = false; // Penanda untuk produk yang ditemukan

    productCards.forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();
      const description = card.getAttribute("data-description").toLowerCase();

      if (name.includes(query) || description.includes(query)) {
        card.style.display = "block"; // Tampilkan kartu produk yang sesuai
        found = true;
      } else {
        card.style.display = "none"; // Sembunyikan kartu produk yang tidak sesuai
      }
    });

    if (!found) {
      alert("Produk tidak ditemukan!");
    }
  });
});

// AND DISNI FUNGSIONALITAS

// KATEGORY
// JavaScript untuk filter kategori
document.querySelectorAll(".category-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah pengalihan halaman
    const filter = this.getAttribute("data-filter");

    document.querySelectorAll(".Houseware-card").forEach((product) => {
      if (
        filter === "all" ||
        product.getAttribute("data-category") === filter
      ) {
        product.style.display = "block"; // Tampilkan produk yang sesuai
      } else {
        product.style.display = "none"; // Sembunyikan produk yang tidak sesuai
      }
    });
  });
});

// KATEGORY

// efek kategory
// Menampilkan semua produk di awal
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".Houseware-card");
  products.forEach((product) => {
    product.classList.add("show"); // Semua produk langsung terlihat di awal
  });
});

document.querySelectorAll(".category-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Tampilkan animasi loading titik-titik
    const loadingDots = document.getElementById("loading-dots");
    loadingDots.style.display = "block";

    // Sembunyikan produk sementara
    const products = document.querySelectorAll(".Houseware-card");
    products.forEach((product) => {
      product.classList.remove("show");
    });

    // Simulasi loading (bisa dihubungkan dengan data-fetching atau timeout)
    setTimeout(() => {
      // Sembunyikan animasi loading titik-titik
      loadingDots.style.display = "none";

      // Tampilkan produk yang sesuai kategori
      const filter = this.getAttribute("data-filter");
      products.forEach((product) => {
        if (
          filter === "all" ||
          product.getAttribute("data-category") === filter
        ) {
          product.classList.remove("fade");
          product.classList.add("show");
        } else {
          product.classList.remove("show");
        }
      });
    }, 1500); // Durasi loading simulasi (1,5 detik)
  });
});

// efek kategory

// JavaScript to handle modal display
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".show-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product");
    showModal(productId);
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function showModal(productId) {
  // Example product details for demonstration
  const productDetails = {
    1: {
      description: `
        <p class="about-text"><strong>About -  SAPU LIDI KASUR LAKOP ANOVA </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
              <div class="color-swatch" style="background-color: #d3e4da;"></div> 
              <div class="color-swatch" style="background-color: #d6dbe0;"></div>
              <div class="color-swatch" style="background-color: #cbdde7;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR LAKOP ANOVA.png",
    },
    2: {
      description: `
        <p class="about-text"><strong>About - SAPU LIDI KARPET BASIR ANOVA </strong> Bahan Berkualitas Terbuat dari lidi alami  (Nipah) yang kuat dan tahan lama.
Desain Ergonomis Nyaman digenggam dan memudahkan proses membersihkan.
Efektif dan Efisien Menyapu bersih debu dan kotoran hingga ke sudut-sudut karpet & sofa
Ramah Lingkungan Tidak menggunakan bahan kimia, aman untuk keluarga dan lingkungan. </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #f7efd0 ;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/sapu lidi karper.png",
    },
    3: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR BASIR JUMBO ANOVA </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI BASIR JUMBO.png",
    },
    4: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR BASIR SUPER J. ANOVA </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR BASIR SUPER J..png",
    },
    5: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR BASIR SUPER MEDIUM ANOVA </strong> 🌟
Bahan Berkualitas Terbuat dari lidi alami  (Nipah) yang kuat dan tahan lama.
🌟
Desain Ergonomis Nyaman digenggam dan memudahkan proses membersihkan.
Efektif dan Efisien Menyapu bersih debu dan kotoran hingga ke sudut-sudut karpet & sofa
🌟
🌟
Ramah Lingkungan Tidak menggunakan bahan kimia, aman untuk keluarga dan lingkungan. </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR BASIR MEDIUM ANOVA.png", // Ganti dengan path gambar yang sesuai
    },
    6: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR KUMBO</strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR KUMBO.png", // Ganti dengan path gambar yang sesuai
    },
    7: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR WALINGI ANOVA </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR WALINGU ANOVA .png",
    },
    8: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR WD </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR WD1.png",
    },
    9: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR SAWIT ANOVA </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR SAWIT ANOVA.png",
    },
    10: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR BULAT </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR BULAT KUMBO.png",
    },
    11: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR DRAGON </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI KASUR DRAGON.png",
    },
    12: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR TAMAN PREMIUM </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI PREMIUM .png",
    },
    13: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR TAMAN TEBAL AWET </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI TEBAL AWET 1.png",
    },
    14: {
      description: `
        <p class="about-text"><strong>About -SAPU LIDI KASUR TAMAN POLOS </strong> </p>
        <table class="product-details-table">
          <tr><th>Dimensi</th><td>30cm x 15cm</td></tr>
          <tr><th>Size</th><td>1.5L</td></tr>
          <tr><th>Package</th><td>Comes in a box</td></tr>
          <tr><th>Volume</th><td>1.5 liters</td></tr>
          <tr><th>Weight</th><td>500 grams</td></tr>
          <tr><th>Color</th><td>
            <div class="color-swatches">
            <div class="color-swatch" style="background-color: #398cdf;"></div>
            <div class="color-swatch" style="background-color: #339899;"></div>
            <div class="color-swatch" style="background-color: #d9415f;"></div>
            </div>
          </td></tr>
        </table>  
      `,
      image: "img/houseware/SAPU LIDI POLOS2.png",
    },

    // Tambahkan lebih banyak produk jika diperlukan.
  };

  // Set image in modal
  document.getElementById("modal-image").src =
    productDetails[productId]?.image || "";
  document.getElementById("modal-image").alt = `Image of ${
    productDetails[productId]?.description || "Product"
  }`;

  // Set details in modal
  document.getElementById("modal-details").innerHTML =
    productDetails[productId]?.description || "Details not available.";

  modal.style.display = "block";
}
