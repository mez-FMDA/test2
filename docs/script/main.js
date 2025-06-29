// Main JavaScript for Elexon Market Facilitator Website

// Configuration
const GITHUB_CONFIG = {
    owner: 'elexon',
    repo: 'market-facilitator',
    apiBase: 'https://api.github.com',
    issuesPerPage: 5,
    projectsPerPage: 3
};

const GISCUS_CONFIG = {
    repo: 'elexon/market-facilitator',
    repoId: 'R_kgDOGexample', // Replace with actual repo ID
    category: 'Announcements',
    categoryId: 'DIC_kwDOGexample', // Replace with actual category ID
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'light',
    lang: 'en'
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSearch();
    initFilters();
    initExpandableCards();
    initWorkingGroupMaterials();
    initSmoothScrolling();
    initAnimations();
    initGitHubWidgets();
    initGiscusDiscussions();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                targetElement.classList.add('fade-in');
                
                // Remove fade-in class after animation
                setTimeout(() => {
                    targetElement.classList.remove('fade-in');
                }, 500);
            }
        });
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Real-time search (with debouncing)
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(performSearch, 300);
        });
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchableElements = document.querySelectorAll('.doc-item, .rule-card, .arch-card, .overview-card');
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const isMatch = text.includes(searchTerm);
        
        if (searchTerm === '') {
            element.style.display = '';
            element.style.opacity = '1';
        } else {
            if (isMatch) {
                element.style.display = '';
                element.style.opacity = '1';
                element.style.backgroundColor = '#fff3cd';
            } else {
                element.style.opacity = '0.3';
            }
        }
    });
    
    // Update search results count
    updateSearchResults(searchTerm);
}

function updateSearchResults(searchTerm) {
    const visibleElements = document.querySelectorAll('.doc-item[style*="opacity: 1"], .rule-card[style*="opacity: 1"], .arch-card[style*="opacity: 1"]');
    console.log(`Found ${visibleElements.length} results for "${searchTerm}"`);
}

// Filter functionality
function initFilters() {
    const statusFilter = document.getElementById('statusFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    if (statusFilter) {
        statusFilter.addEventListener('change', applyFilters);
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const statusFilter = document.getElementById('statusFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    
    const filterableElements = document.querySelectorAll('.doc-item, .rule-card');
    
    filterableElements.forEach(element => {
        const elementStatus = element.getAttribute('data-status');
        const elementType = element.getAttribute('data-type');
        
        const statusMatch = !statusFilter || elementStatus === statusFilter;
        const typeMatch = !typeFilter || elementType === typeFilter;
        
        if (statusMatch && typeMatch) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
    
    // Update filter results
    updateFilterResults();
}

function updateFilterResults() {
    const visibleElements = document.querySelectorAll('.doc-item[style*="display: ''"], .rule-card[style*="display: ''"]');
    console.log(`Showing ${visibleElements.length} filtered results`);
}

// Expandable cards functionality
function initExpandableCards() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            if (targetContent) {
                const isExpanded = targetContent.style.display !== 'none';
                
                if (isExpanded) {
                    targetContent.style.display = 'none';
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    targetContent.style.display = 'block';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
}

// Working group materials functionality
function initWorkingGroupMaterials() {
    // This function is called when WG Materials buttons are clicked
    window.toggleWGMaterials = function(ruleId) {
        const materialsDiv = document.getElementById(ruleId + '-materials');
        if (materialsDiv) {
            const isVisible = materialsDiv.style.display !== 'none';
            materialsDiv.style.display = isVisible ? 'none' : 'block';
            
            // Add animation
            if (!isVisible) {
                materialsDiv.classList.add('fade-in');
                setTimeout(() => {
                    materialsDiv.classList.remove('fade-in');
                }, 500);
            }
        }
    };
}

// Discussions functionality
function initGiscusDiscussions() {
    window.toggleDiscussions = function(ruleId) {
        const discussionsDiv = document.getElementById(ruleId + '-discussions');
        if (discussionsDiv) {
            const isVisible = discussionsDiv.style.display !== 'none';
            discussionsDiv.style.display = isVisible ? 'none' : 'block';
            
            // Initialize Giscus if not already done
            if (!isVisible) {
                initGiscusForRule(ruleId);
                discussionsDiv.classList.add('fade-in');
                setTimeout(() => {
                    discussionsDiv.classList.remove('fade-in');
                }, 500);
            }
        }
    };
}

// GitHub Widgets functionality
function initGitHubWidgets() {
    loadGitHubIssues();
    loadGitHubProjects();
    
    // Add refresh buttons
    addRefreshButtons();
}

async function loadGitHubIssues() {
    const issuesContainer = document.getElementById('github-issues');
    if (!issuesContainer) return;
    
    try {
        const response = await fetch(`${GITHUB_CONFIG.apiBase}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues?state=open&per_page=${GITHUB_CONFIG.issuesPerPage}&sort=updated`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const issues = await response.json();
        displayGitHubIssues(issues, issuesContainer);
        
    } catch (error) {
        console.error('Error loading GitHub issues:', error);
        displayGitHubError(issuesContainer, 'Failed to load issues');
    }
}

async function loadGitHubProjects() {
    const projectsContainer = document.getElementById('github-projects');
    if (!projectsContainer) return;
    
    try {
        const response = await fetch(`${GITHUB_CONFIG.apiBase}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/projects?per_page=${GITHUB_CONFIG.projectsPerPage}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const projects = await response.json();
        displayGitHubProjects(projects, projectsContainer);
        
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        displayGitHubError(projectsContainer, 'Failed to load projects');
    }
}

function displayGitHubIssues(issues, container) {
    if (issues.length === 0) {
        container.innerHTML = `
            <div class="widget-empty-state">
                <i class="fas fa-inbox"></i>
                <h4>No Open Issues</h4>
                <p>All issues have been resolved!</p>
            </div>
        `;
        return;
    }
    
    const issuesHTML = issues.map(issue => `
        <div class="issue-item ${issue.state}">
            <span class="issue-number">#${issue.number}</span>
            <span class="issue-title">${issue.title}</span>
            <span class="issue-status ${issue.state}">${issue.state}</span>
            <span class="issue-assignee">${issue.assignee ? '@' + issue.assignee.login : 'Unassigned'}</span>
        </div>
    `).join('');
    
    container.innerHTML = issuesHTML;
}

function displayGitHubProjects(projects, container) {
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="widget-empty-state">
                <i class="fas fa-project-diagram"></i>
                <h4>No Projects</h4>
                <p>No projects have been created yet.</p>
            </div>
        `;
        return;
    }
    
    const projectsHTML = projects.map(project => `
        <div class="project-item">
            <div class="project-header">
                <span class="project-title">${project.name}</span>
                <span class="project-status ${project.state}">${project.state}</span>
            </div>
            <div class="project-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${Math.random() * 100}%"></div>
                </div>
            </div>
            <div class="project-meta">
                <span>Created: ${new Date(project.created_at).toLocaleDateString()}</span>
                <span>Updated: ${new Date(project.updated_at).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = projectsHTML;
}

function displayGitHubError(container, message) {
    container.innerHTML = `
        <div class="github-api-error">
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        </div>
    `;
}

function addRefreshButtons() {
    const githubWidgets = document.querySelectorAll('.github-widget');
    
    githubWidgets.forEach(widget => {
        const refreshBtn = document.createElement('button');
        refreshBtn.className = 'widget-refresh';
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
        refreshBtn.title = 'Refresh data';
        
        refreshBtn.addEventListener('click', function() {
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 1000);
            
            // Reload data based on widget type
            if (widget.querySelector('#github-issues')) {
                loadGitHubIssues();
            } else if (widget.querySelector('#github-projects')) {
                loadGitHubProjects();
            }
        });
        
        widget.appendChild(refreshBtn);
    });
}

// Giscus Discussions
function initGiscusForRule(ruleId) {
    const container = document.querySelector(`[data-rule="${ruleId}"]`);
    if (!container || container.querySelector('iframe')) return; // Already initialized
    
    const giscus = document.createElement('script');
    giscus.src = 'https://giscus.app/client.js';
    giscus.setAttribute('data-repo', GISCUS_CONFIG.repo);
    giscus.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
    giscus.setAttribute('data-category', GISCUS_CONFIG.category);
    giscus.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
    giscus.setAttribute('data-mapping', 'pathname');
    giscus.setAttribute('data-strict', GISCUS_CONFIG.strict);
    giscus.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled);
    giscus.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
    giscus.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
    giscus.setAttribute('data-theme', GISCUS_CONFIG.theme);
    giscus.setAttribute('data-lang', GISCUS_CONFIG.lang);
    giscus.setAttribute('data-term', `Rule: ${ruleId}`);
    giscus.crossOrigin = 'anonymous';
    
    container.appendChild(giscus);
}

// Initialize general discussions
function initGeneralDiscussions() {
    const generalContainer = document.getElementById('general-discussions');
    if (!generalContainer) return;
    
    const giscus = document.createElement('script');
    giscus.src = 'https://giscus.app/client.js';
    giscus.setAttribute('data-repo', GISCUS_CONFIG.repo);
    giscus.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
    giscus.setAttribute('data-category', GISCUS_CONFIG.category);
    giscus.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
    giscus.setAttribute('data-mapping', 'pathname');
    giscus.setAttribute('data-strict', GISCUS_CONFIG.strict);
    giscus.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled);
    giscus.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
    giscus.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
    giscus.setAttribute('data-theme', GISCUS_CONFIG.theme);
    giscus.setAttribute('data-lang', GISCUS_CONFIG.lang);
    giscus.crossOrigin = 'anonymous';
    
    generalContainer.appendChild(giscus);
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    // Smooth scroll for anchor links
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
}

// Animation functionality
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.overview-card, .arch-card, .rule-card, .collab-card');
    animateElements.forEach(el => observer.observe(el));
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#212529';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Export functions for global use
window.showNotification = showNotification;
window.performSearch = performSearch;
window.applyFilters = applyFilters;
window.loadGitHubIssues = loadGitHubIssues;
window.loadGitHubProjects = loadGitHubProjects;

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && searchInput.value) {
            searchInput.value = '';
            performSearch();
        }
    }
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced search with debouncing
const debouncedSearch = debounce(performSearch, 300);

// Add loading states
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Initialize general discussions when collaboration section is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize general discussions after a short delay
    setTimeout(() => {
        initGeneralDiscussions();
    }, 1000);
});
