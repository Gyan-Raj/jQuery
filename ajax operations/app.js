// $(document).ready(() => {
//   let contentDiv = $("#content");
//   contentDiv.css({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   });
//   contentDiv.html("<h3>Welcome to jQuery with ajax</h3>");

//   //create
//   $(document).on("click", "#createProduct", function () {
//     contentDiv.html("");
//     contentDiv.css({
//       justifyContent: "flex-start",
//       alignItems: "center",
//       flexDirection: "column",
//     });

//     let div1 = $("<div></div>");
//     div1.html("<h3>Create a product</h3>");
//     contentDiv.append(div1);
//     let div2 = $("<div></div>");
//     div2.css({
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "70%",
//       width: "60%",
//       border: "1px solid black",
//       boxShadow: "5px 5px 20px black",
//       borderRadius: "4px",
//     });
//     div2.html(`<form id="createForm">
//         <div><label for="title">Title<sup>*</sup>:</label>
//         <input type="text" id="title" name="title" value="" required> </div>
//         <div><label for="price">Price<sup>*</sup>:</label>
//         <input type="number" id="price" name="price" value="" required> </div>
//         <div><label for="description">Description<sup>*</sup>:</label>
//         <input type="text" id="description" name="description" value="" required> </div>
//         <div><label for="categoryId">Category Id<sup>*</sup>:</label>
//         <input type="text" id="categoryId" name="categoryId" value="" required/> </div>
//         <div><label for="imageUrl">Image (url)<sup>*</sup>:</label>
//         <input type="url" id="imageUrl" name="imageUrl" value="" required placeholder="https://example.com" > </div>
//         <div><button id="createProductBtn" type="submit">Create</button></div>
//         </form>`);
//     contentDiv.append(div2);
//     $(document).on("submit", "#createForm", (event) => {
//       event.preventDefault();
//       let newProduct = {
//         title: $("#title").val(),
//         price: $("#price").val(),
//         description: $("#description").val(),
//         categoryId: $("#categoryId").val(),
//         images: [$("#imageUrl").val()],
//       };
//       $.ajax({
//         url: "https://api.escuelajs.co/api/v1/products/",
//         type: "POST",
//         data: JSON.stringify(newProduct),
//         contentType: "application/json",
//         success: function () {
//           alert("Product created successfully!");
//           $("#createForm")[0].reset();
//         },
//         error: function () {
//           alert("Failed to create product. Please try again.");
//         },
//       });
//     });
//   });

//   //read
//   $(document).on("click", "#readProduct", function () {
//     contentDiv.html("");
//     contentDiv.css({
//       justifyContent: "flex-start",
//       alignItems: "center",
//       flexDirection: "column",
//     });

//     let div1 = $("<div></div>");
//     div1.html("<h3>All Products</h3>");
//     contentDiv.append(div1);

//     let div2 = $(`<div id="allProducts"></div>`);
//     contentDiv.append(div2);
//     let pageNo = 1;
//     let itemsPerPage = 4;
//     let dataLength;

//     function fetchProducts(pageNo) {
//       let startIndex = (pageNo - 1) * itemsPerPage;
//       let endIndex = startIndex + itemsPerPage;
//       jQuery.ajax({
//         url: "https://api.escuelajs.co/api/v1/products",
//         type: "GET",
//         success: function (data) {
//           console.log(data);
//           div2.html("");
//           dataLength = Math.ceil(data.length / itemsPerPage);
//           $.each(data.slice(startIndex, endIndex), (index, product) => {
//             let div4 = $(`<div id=${product.id}></div>`);
//             div4.html(`
//               <img src="${product.images[0]}" alt="${product.title}"/>
//               <p>${product.title}</p>
//               <p>$${product.price}</p>
//             `);
//             div2.append(div4);
//           });
//         },
//         error: () => {
//           div2.html(
//             `<p style="color:red">Oops!!! Error fetching the data, try after sometime</p>`
//           );
//         },
//       });
//     }
//     fetchProducts(pageNo);

//     let div3 = $(`<div id="paginationBar"></div>`);
//     div3.html(`<div>
//       <button id="prevPage"><</button>
//       <input type="number" id="pageNo" disabled value="${pageNo}" min="1"  />
//       <button id="nextPage">></button>
//       </div>`);
//     contentDiv.append(div3);
//     $(document).on("click", "#prevPage", () => {
//       if (pageNo > 1) {
//         pageNo -= 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//     $(document).on("click", "#nextPage", () => {
//       if (pageNo < dataLength) {
//         pageNo += 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//   });

//   //update
//   $(document).on("click", "#updateProduct", function () {
//     contentDiv.html("");
//     contentDiv.css({
//       justifyContent: "flex-start",
//       alignItems: "center",
//       flexDirection: "column",
//     });

//     let div1 = $("<div></div>");
//     div1.html("<h3>Update a Product</h3>");
//     contentDiv.append(div1);

//     let div2 = $(`<div id="allProducts"></div>`);
//     contentDiv.append(div2);
//     let pageNo = 1;
//     let itemsPerPage = 4;
//     let dataLength;

//     function fetchProducts(pageNo) {
//       let startIndex = (pageNo - 1) * itemsPerPage;
//       let endIndex = startIndex + itemsPerPage;
//       jQuery.ajax({
//         url: "https://api.escuelajs.co/api/v1/products",
//         type: "GET",
//         success: function (data) {
//           console.log(data);
//           div2.html("");
//           dataLength = Math.ceil(data.length / itemsPerPage);
//           $.each(data.slice(startIndex, endIndex), (index, product) => {
//             let div4 = $(`<div id=${product.id}></div>`);
//             div4.html(`
//               <img src="${product.images[0]}" alt="${product.title}"/>
//               <p>${product.title}</p>
//               <p>$${product.price}</p>
//               <div><button id="updateButton"  data-product-id="${product.id}">Update</button></div>
//             `);
//             div2.append(div4);
//           });
//         },
//         error: () => {
//           div2.html(
//             `<p style="color:red">Oops!!! Error fetching the data, try after sometime</p>`
//           );
//         },
//       });
//     }
//     fetchProducts(pageNo);

//     $(document).on("click", "#updateButton", function () {
//       let productId = $(this).data("product-id");
//       console.log(productId);

//       jQuery.ajax({
//         url: `https://api.escuelajs.co/api/v1/products/${productId}`,
//         type: "GET",
//         success: function (product) {
//           contentDiv.html("");
//           contentDiv.css({
//             justifyContent: "flex-start",
//             alignItems: "center",
//             flexDirection: "column",
//           });

//           let div1 = $("<div></div>");
//           div1.html("<h3>Update the product</h3>");
//           contentDiv.append(div1);

//           let div2 = $("<div></div>");
//           div2.css({
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "70%",
//             width: "60%",
//             border: "1px solid black",
//             boxShadow: "5px 5px 20px black",
//             borderRadius: "4px",
//           });

//           div2.html(`<form id="updateForm">
//             <div><label for="title">Title<sup>*</sup>:</label>
//             <input type="text" id="title" name="title" value="${
//               product.title
//             }" required> </div>
//             <div><label for="price">Price<sup>*</sup>:</label>
//             <input type="number" id="price" name="price" value="${
//               product.price
//             }" required> </div>
//             <div><label for="description">Description<sup>*</sup>:</label>
//             <input type="text" id="description" name="description" value="${
//               product.description
//             }" required> </div>
//             <div><label for="categoryId">Category Id<sup>*</sup>:</label>
//             <input type="text" id="categoryId" name="categoryId" value="${
//               product.category.id
//             }" required/> </div>
//             <div><label for="imageUrl">Image (url)<sup>*</sup>:</label>
//             <input type="url" id="imageUrl" name="imageUrl" value="${
//               JSON.parse(product.images)[0]
//             }" required placeholder="https://example.com" > </div>
//             <div><button id="submitBtn" type="submit">Submit</button></div>
//           </form>`);

//           contentDiv.append(div2);

//           $(document).on("click", "#submitBtn", function (event) {
//             event.preventDefault();
//             let updatedProduct = {
//               title: $("#title").val(),
//               price: $("#price").val(),
//               description: $("#description").val(),
//               categoryId: $("#categoryId").val(),
//               images: [$("#imageUrl").val()],
//             };

//             // Send the updated data via an AJAX PUT request
//             jQuery.ajax({
//               url: `https://api.escuelajs.co/api/v1/products/${productId}`,
//               type: "PUT",
//               data: JSON.stringify(updatedProduct),
//               contentType: "application/json",
//               success: function () {
//                 alert("Product updated successfully!");
//                 // Optionally, you can refresh the product list or perform other actions here
//               },
//               error: function () {
//                 alert("Failed to update product. Please try again.");
//               },
//             });
//           });
//         },
//         error: function () {
//           alert("Failed to fetch product details. Please try again.");
//         },
//       });
//     });

//     let div3 = $(`<div id="paginationBar"></div>`);
//     div3.html(`<div>
//       <button id="prevPage"><</button>
//       <input type="number" id="pageNo" disabled value="${pageNo}" min="1"  />
//       <button id="nextPage">></button>
//       </div>`);
//     contentDiv.append(div3);
//     $(document).on("click", "#prevPage", () => {
//       if (pageNo > 1) {
//         pageNo -= 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//     $(document).on("click", "#nextPage", () => {
//       if (pageNo < dataLength) {
//         pageNo += 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//   });

//   //delete
//   $(document).on("click", "#deleteProduct", function () {
//     contentDiv.html("");
//     contentDiv.css({
//       justifyContent: "flex-start",
//       alignItems: "center",
//       flexDirection: "column",
//     });

//     let div1 = $("<div></div>");
//     div1.html("<h3>Delete a Product</h3>");
//     contentDiv.append(div1);

//     let div2 = $(`<div id="allProducts"></div>`);
//     contentDiv.append(div2);
//     let pageNo = 1;
//     let itemsPerPage = 4;
//     let dataLength;

//     function fetchProducts(pageNo) {
//       let startIndex = (pageNo - 1) * itemsPerPage;
//       let endIndex = startIndex + itemsPerPage;
//       jQuery.ajax({
//         url: "https://api.escuelajs.co/api/v1/products",
//         type: "GET",
//         success: function (data) {
//           console.log(data);
//           div2.html("");
//           dataLength = Math.ceil(data.length / itemsPerPage);
//           $.each(data.slice(startIndex, endIndex), (index, product) => {
//             let div4 = $(`<div id=${product.id}></div>`);
//             div4.html(`
//               <img src="${product.images[0]}" alt="${product.title}"/>
//               <p>${product.title}</p>
//               <p>$${product.price}</p>
//               <div><button id="deleteButton"  data-product-id="${product.id}">Delete</button></div>
//             `);
//             div2.append(div4);
//           });
//         },
//         error: () => {
//           div2.html(
//             `<p style="color:red">Oops!!! Error fetching the data, try after sometime</p>`
//           );
//         },
//       });
//     }
//     fetchProducts(pageNo);

//     $(document).on("click", "#deleteButton", function () {
//       let productId = $(this).data("product-id");
//       console.log(productId);
//       div2.html("");
//       div2.html(`<form id="confirmation">
//         <h3>Are you sure?</h3>
//         <button type="button" id="yesBtn">Yes</button>
//         <button type="button" id="noBtn">No</button>
//       </form>`);
//       $("#yesBtn").css({
//         padding: "8px",
//         border: "1px solid black",
//         backgroundColor: "red",
//         cursor: "pointer",
//       });
//       $("#noBtn").css({
//         padding: "8px",
//         border: "1px solid black",
//         backgroundColor: "green",
//         cursor: "pointer",
//         color: "black",
//       });

//       $(document).on("click", "#yesBtn", function () {
//         jQuery.ajax({
//           url: `https://api.escuelajs.co/api/v1/products/${productId}`,
//           type: "DELETE",
//           success: function () {
//             alert("Product deleted successfully!");
//             fetchProducts(pageNo); // Refresh the product list
//           },
//           error: function () {
//             alert("Failed to delete the product. Please try again.");
//           },
//         });
//       });
//       $(document).on("click", "#noBtn", function () {
//         fetchProducts(pageNo);
//       });
//     });

//     let div3 = $(`<div id="paginationBar"></div>`);
//     div3.html(`<div>
//       <button id="prevPage"><</button>
//       <input type="number" id="pageNo" disabled value="${pageNo}" min="1"  />
//       <button id="nextPage">></button>
//       </div>`);
//     contentDiv.append(div3);
//     $(document).on("click", "#prevPage", () => {
//       if (pageNo > 1) {
//         pageNo -= 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//     $(document).on("click", "#nextPage", () => {
//       if (pageNo < dataLength) {
//         pageNo += 1;
//         $("#pageNo").val(pageNo); //important
//         fetchProducts(pageNo);
//       }
//     });
//   });

//   //homePage
//   $(document).on("click", "#homePage", function () {
//     contentDiv.html("");
//     contentDiv.css({
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     });
//     contentDiv.html("<h3>Welcome to jQuery with ajax</h3>");
//   });
// });

$(document).ready(() => {
  function showLoading() {
    $("#loadingIndicator").show();
  }

  function hideLoading() {
    $("#loadingIndicator").hide();
  }
  const contentDiv = $("#content");
  contentDiv.css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  contentDiv.html("<h3>Welcome to jQuery with ajax</h3>");

  /**
   * common apiUrl path for all operations
   */
  const apiUrl = "https://api.escuelajs.co/api/v1/products";

  /**
   * writing reusable functions
   */
  //home page
  function renderHomePage() {
    contentDiv.html("<h3>Welcome to jQuery with ajax</h3>");
  }

  //form
  function renderForm(title, formContent, onSubmit) {
    contentDiv.html("");
    contentDiv.css({
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
    });

    const div1 = $("<div></div>");
    div1.html(`<h3>${title}</h3>`);
    contentDiv.append(div1);

    const div2 = $("<div></div>");
    div2.css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70%",
      width: "60%",
      border: "1px solid black",
      boxShadow: "5px 5px 20px black",
      borderRadius: "4px",
    });
    div2.html(formContent);
    contentDiv.append(div2);

    $(document).on("submit", "form", onSubmit);
  }

  //fetching list of all products (with pagination)
  function fetchProducts(pageNo, itemsPerPage, callback) {
    const startIndex = (pageNo - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    $.ajax({
      url: apiUrl,
      type: "GET",
      beforeSend: showLoading,
      complete: hideLoading,
      success: (data) => {
        const paginatedData = data.slice(startIndex, endIndex);
        callback(paginatedData, Math.ceil(data.length / itemsPerPage));
      },
      error: () => {
        contentDiv.html(
          `<p style="color:red">Oops!!! Error fetching the data, try again later</p>`
        );
      },
    });
  }

  //main content
  function renderProductList(title, buttonText, buttonId, buttonCallback) {
    contentDiv.html("");
    contentDiv.css({
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
    });

    const div1 = $("<div></div>");
    div1.html(`<h3>${title}</h3>`);
    contentDiv.append(div1);

    const div2 = $('<div id="allProducts"></div>');
    contentDiv.append(div2);

    let pageNo = 1;
    const itemsPerPage = 4;
    let totalPages;

    //cards
    function updateProductList() {
      fetchProducts(pageNo, itemsPerPage, (products, total) => {
        totalPages = total;
        div2.html("");
        $.each(products, (index, product) => {
          console.log(product.images[0]);

          const productDiv = $(`<div id="${product.id}"></div>`);
          productDiv.html(`
            <img src="${product.images[0]}" alt="${product.title}"/>
            <p>${product.title}</p>
            <p>$${product.price}</p>
            <div><button id="${buttonId}" data-product-id="${product.id}">${buttonText}</button></div>
          `);
          div2.append(productDiv);
        });
      });
    }

    updateProductList();

    //pagination buttons
    const paginationBar = $('<div id="paginationBar"></div>');
    paginationBar.html(`
      <div>
        <button id="prevPage"><</button>
        <input type="number" id="pageNo" disabled value="${pageNo}" min="1"/>
        <button id="nextPage">></button>
      </div>
    `);
    contentDiv.append(paginationBar);

    //pagination button functions
    $(document).on("click", "#prevPage", () => {
      console.log("Pagination button clicked. Page will not refresh.");
      if (pageNo > 1) {
        pageNo -= 1;
        $("#pageNo").val(pageNo);
        updateProductList();
      }
    });

    $(document).on("click", "#nextPage", () => {
      console.log("Pagination button clicked. Page will not refresh.");
      if (pageNo < totalPages) {
        pageNo += 1;
        $("#pageNo").val(pageNo);
        updateProductList();
      }
    });

    $(document).on("click", `#${buttonId}`, buttonCallback);
  }

  /**
   * CRUD:
   */
  // Create
  $(document).on("click", "#createProduct", function () {
    const formContent = `
      <form id="createForm">
        <div><label for="title">Title<sup>*</sup>:</label>
        <input type="text" id="title" name="title" value="" required> </div>
        <div><label for="price">Price<sup>*</sup>:</label>
        <input type="number" id="price" name="price" value="" required> </div>
        <div><label for="description">Description<sup>*</sup>:</label>
        <input type="text" id="description" name="description" value="" required> </div>
        <div><label for="categoryId">Category Id<sup>*</sup>:</label>
        <input type="text" id="categoryId" name="categoryId" value="" required/> </div>
        <div><label for="imageUrl">Image (url)<sup>*</sup>:</label>
        <input type="url" id="imageUrl" name="imageUrl" value="" required placeholder="https://example.com"> </div>
        <div><button id="createProductBtn" type="submit">Create</button></div>
      </form>`;

    const onSubmit = (event) => {
      event.preventDefault();
      const newProduct = {
        title: $("#title").val(),
        price: $("#price").val(),
        description: $("#description").val(),
        categoryId: $("#categoryId").val(),
        images: [$("#imageUrl").val()],
      };

      $.ajax({
        url: apiUrl,
        type: "POST",
        data: JSON.stringify(newProduct),
        contentType: "application/json",
        beforeSend: showLoading,
        complete: hideLoading,
        success: () => {
          alert("Product created successfully!");
          $("#createForm")[0].reset();
        },
        error: () => {
          alert("Failed to create product. Please try again.");
        },
      });
    };

    renderForm("Create a product", formContent, onSubmit);
  });

  // Read
  $(document).on("click", "#readProduct", function () {
    renderProductList("All Products", "", "viewButton", () => {});
  });

  // Update
  $(document).on("click", "#updateProduct", function () {
    renderProductList(
      "Update a Product",
      "Update",
      "updateButton",
      function () {
        const productId = $(this).data("product-id");

        $.ajax({
          url: `${apiUrl}/${productId}`,
          type: "GET",
          beforeSend: showLoading,
          complete: hideLoading,
          success: (product) => {
            const formContent = `
            <form id="updateForm">
              <div><label for="title">Title<sup>*</sup>:</label>
              <input type="text" id="title" name="title" value="${product.title}" required> </div>
              <div><label for="price">Price<sup>*</sup>:</label>
              <input type="number" id="price" name="price" value="${product.price}" required> </div>
              <div><label for="description">Description<sup>*</sup>:</label>
              <input type="text" id="description" name="description" value="${product.description}" required> </div>
              <div><label for="categoryId">Category Id<sup>*</sup>:</label>
              <input type="text" id="categoryId" name="categoryId" value="${product.category.id}" required/> </div>
              <div><label for="imageUrl">Image (url)<sup>*</sup>:</label>
              <input type="url" id="imageUrl" name="imageUrl" value="${product.images[0]}" required placeholder="https://example.com"> </div>
              <div><button id="submitBtn" type="submit">Submit</button></div>
            </form>`;

            const onSubmit = (event) => {
              event.preventDefault();
              const updatedProduct = {
                title: $("#title").val(),
                price: $("#price").val(),
                description: $("#description").val(),
                categoryId: $("#categoryId").val(),
                images: [$("#imageUrl").val()],
              };

              $.ajax({
                url: `${apiUrl}/${productId}`,
                type: "PUT",
                beforeSend: showLoading,
                complete: hideLoading,
                data: JSON.stringify(updatedProduct),
                contentType: "application/json",
                success: () => {
                  alert("Product updated successfully!");
                },
                error: () => {
                  alert("Failed to update product. Please try again.");
                },
              });
            };

            renderForm("Update the product", formContent, onSubmit);
          },
          error: () => {
            alert("Failed to fetch product details. Please try again.");
          },
        });
      }
    );
  });

  // Delete
  $(document).on("click", "#deleteProduct", function () {
    renderProductList(
      "Delete a Product",
      "Delete",
      "deleteButton",
      function () {
        const productId = $(this).data("product-id");

        const confirmationDiv = $(`
        <form id="confirmation">
          <h3>Are you sure you want to delete this product?</h3>
          <div><button id="confirmDelete">Yes</button>
          <button id="cancelDelete">No</button></div>
        </form>
      `);
        contentDiv.html("");
        contentDiv.css({
          justifyContent: "center",
          alignItems: "center",
        });
        contentDiv.append(confirmationDiv);

        $(document).on("click", "#confirmDelete", function (event) {
          event.preventDefault();

          $.ajax({
            url: `${apiUrl}/${productId}`,
            type: "DELETE",
            beforeSend: showLoading,
            complete: hideLoading,
            success: () => {
              alert("Product deleted successfully!");
              renderProductList(
                "Delete a Product",
                "Delete",
                "deleteButton",
                function () {}
              );
            },
            error: () => {
              alert("Failed to delete product. Please try again.");
            },
          });
        });

        $(document).on("click", "#cancelDelete", function (event) {
          event.preventDefault();
          renderProductList(
            "Delete a Product",
            "Delete",
            "deleteButton",
            function () {}
          );
        });
      }
    );
  });

  $("#homePage").on("click", renderHomePage);
  console.log("page loaded");
});
