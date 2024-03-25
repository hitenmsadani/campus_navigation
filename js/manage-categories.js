// Function to fetch categories from the server
async function fetchCategories() {
    try {
        const response = await fetch('/api/categories');
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Function to display categories in the UI
function displayCategories(categories) {
    const categoryList = document.querySelector('#category-list ul');
    categoryList.innerHTML = '';

    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.textContent = category.name;
        categoryList.appendChild(listItem);
    });
}

// Function to handle form submission for adding a new category
async function handleAddCategory(event) {
    event.preventDefault();

    const categoryName = document.querySelector('#category-name').value;

    try {
        const response = await fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: categoryName })
        });

        if (response.ok) {
            fetchCategories();
            event.target.reset();
        } else {
            console.error('Error adding category');
        }
    } catch (error) {
        console.error('Error adding category:', error);
    }
}

// Event listener for form submission
document.querySelector('#category-form form').addEventListener('submit', handleAddCategory);

// Fetch categories when the page loads
fetchCategories();
