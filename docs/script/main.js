// Main JavaScript for Elexon Market Facilitator Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    initializeDocumentActions();
    initializeCollaborationButtons();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#home')) {
            link.classList.add('active');
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const documentItems = document.querySelectorAll('.document-item');
    
    documentItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Filter functionality
function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', applyFilters);
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const status = document.getElementById('statusFilter')?.value || '';
    const type = document.getElementById('typeFilter')?.value || '';
    
    const documentItems = document.querySelectorAll('.document-item');
    
    documentItems.forEach(item => {
        const itemCategory = item.dataset.category;
        const itemStatus = item.dataset.status;
        const itemType = item.dataset.type;
        
        const categoryMatch = !category || itemCategory === category;
        const statusMatch = !status || itemStatus === status;
        const typeMatch = !type || itemType === type;
        
        if (categoryMatch && statusMatch && typeMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Document actions
function initializeDocumentActions() {
    const downloadButtons = document.querySelectorAll('.slide-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track download analytics
            const fileName = this.getAttribute('href').split('/').pop();
            console.log('Download initiated:', fileName);
            
            // You can add analytics tracking here
            // gtag('event', 'download', { 'file_name': fileName });
        });
    });
}

// Collaboration buttons
function initializeCollaborationButtons() {
    const collaborationButtons = document.querySelectorAll('.collaboration-buttons a');
    
    collaborationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const action = this.textContent.trim();
            const url = this.getAttribute('href');
            
            // Track collaboration actions
            console.log('Collaboration action:', action, url);
            
            // You can add analytics tracking here
            // gtag('event', 'collaboration', { 'action': action, 'url': url });
        });
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function truncateText(text, maxLength = 150) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (if needed)
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Document version tracking
function trackDocumentVersion(documentId, version) {
    console.log('Document viewed:', documentId, 'Version:', version);
    // You can add analytics tracking here
    // gtag('event', 'document_view', { 'document_id': documentId, 'version': version });
}

// Export functions for use in other scripts
window.MarketFacilitator = {
    formatDate,
    truncateText,
    trackDocumentVersion,
    performSearch,
    applyFilters
};
