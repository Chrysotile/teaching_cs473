const handleShippingCheckboxClick = (event) => {
    const shippingFields = document.getElementById("shipping");
    if (event.target.checked) {
        shippingFields.style.display = "none";
    } else {
        shippingFields.style.display = "inline";
    }
}

const handleFormData = (data) => {
    // better view of all of the form data for debugging
    const formDataAsObject = Object.fromEntries(data.entries())
    console.log(formDataAsObject)

    if (data.get("first-name") === "") {
        console.error("first field is empty.")
        return false
    }
    if (data.get("last-name") === "") {
        console.error("last field is empty.")
        return false
    }
    if (data.get("email") === "") {
        console.error("email field is empty.")
        return false
    }

    if (data.get("username") === "") {
        console.error("username field is empty.")
        return false
    }

    if (data.get("address") === "") {
        console.error("address field is empty.")
        return false
    }

    if (data.get("address2") === "") {
        console.error("address2 field is empty.")
        return false
    }

    console.log(data.get("country"));
    if (data.get("country") === "none") {
        console.error("country field is empty.")
        return false
    }

    console.log(data.get("city"));
    if (data.get("city") === "none") {
        console.error("city field is empty.")
        return false
    }

    console.log(data.get("state"));
    if (data.get("state") === "none") {
        console.error("state field is empty.")
        return false
    }

    console.log(data.get("zip"));
    if (data.get("zip") === "") {
        console.error("zip field is empty.")
        return false
    }

    console.log(data.get("first-name-shipping"));
    if (data.get("first-name-shipping") === "") {
        console.error("first name shipping field is empty.")
        return false
    }

    console.log(data.get("last-name-shipping"));
    if (data.get("last-name-shipping") === "") {
        console.error("last name field is empty.")
        return false
    }

    console.log(data.get("shipping-address"));
    if (data.get("shipping-address") === "") {
        console.error("shipping-address2 field is empty.")
        return false
    }

    console.log(data.get("shipping-country"));
    if (data.get("shipping-country") === "none") {
        console.error(" field is empty.")
        return false
    }

    console.log(data.get("shipping-city"));
    if (data.get("shipping-city") === "none") {
        console.error("shipping-city field is empty.")
        return false
    }

    console.log(data.get("shipping-state"));
    if (data.get("shipping-state") === "none") {
        console.error("shipping-state field is empty.")
        return false
    }

    console.log(data.get("shipping-zip"));
    if (data.get("shipping-zip") === "") {
        console.error("shipping-zip field is empty.")
        return false
    }

    console.log(data.get("name-on-card"));
    if (data.get("name-on-card") === "") {
        console.error("name-on-card field is empty.")
        return false
    }

    console.log(data.get("card-number"));
    if (data.get("card-number") === "none") {
        console.error("card-number field is empty.")
        return false
    }

    console.log(data.get("expiration"));
    if (data.get("expiration") === "") {
        console.error("expiration field is empty.")
        return false
    }

    console.log(data.get("cvv"));
    if (data.get("cvv") === "") {
        console.error("cvv field is empty.")
        return false
    }

    // //data.get("shippingCheckbox") is either null or "on"
    // if (!data.get("shippingCheckbox")) {
    //     console.error("Shipping field is empty.")
    //     return false
    // }

    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    form = document.getElementById("form");

    form.addEventListener('submit', function (event) {
        console.log("triggering Form API validation");

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            form.classList.add('was-validated');
        }

        // handle the form data
        const data = new FormData(event.target);

        if (handleFormData(data)) {
            console.log("FORM PROCESSED SUCCESSFULLY")
        } else {
            console.error("FORM FAILED TO PROCESS")
        }

    }, false);
})