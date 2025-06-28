# Elexon Market Facilitator - Flexibility Markets Collaboration Hub

A professional collaboration platform for developing GB flexibility markets, serving as both a collaboration tool and file server for Elexon's work programmes.

## Overview

This website supports two main work programmes:
- **FMAR Design**: Flexibility Market Asset Registration solution design
- **Rules Development**: Flexibility Market Rules development

## Features

- **Professional Design**: Modern, responsive design with purple-blue gradient theme
- **Collaboration Tools**: GitHub integration for issues and discussions
- **Document Management**: Comprehensive document library with search and filtering
- **Working Group Materials**: Download sections for workshop presentations
- **Terms of Reference**: Clear signposting for programme governance
- **Mobile Responsive**: Works on all devices and screen sizes

## File Structure

```
/
├── index.html                 # Main homepage
├── styles/
│   └── main.css              # Complete styling with normalize.css and custom styles
├── scripts/
│   └── main.js               # Core JavaScript functionality
├── pages/
│   ├── fmar/                 # FMAR Design section
│   │   ├── overview.html     # FMAR programme overview
│   │   ├── ecosystem/        # Ecosystem architecture documents
│   │   ├── data/            # Data architecture documents
│   │   ├── application/     # Application architecture documents
│   │   └── supporting/      # Supporting artefacts
│   ├── rules/               # Rules Development section
│   │   ├── vision.html      # Rules development vision
│   │   ├── dispatch.html    # Dispatch rules (with TOR & WG slides)
│   │   ├── e2e-process.html # E2E process rules
│   │   ├── prequal.html     # Prequalification rules
│   │   └── agreement.html   # Standard agreement
│   ├── collaboration/       # Collaboration tools
│   │   ├── discussions.html # Discussion forums
│   │   ├── workshops.html   # Working group materials
│   │   └── contact.html     # Contact information
│   └── docs/                # Documentation
│       └── all-documents.html # Complete document library
└── README.md                # This file
```

## Key Design Elements

### Styling
- **Font**: Lato (Google Fonts)
- **Colors**: Purple-blue gradient theme (#667eea to #764ba2)
- **Accent**: Green (#74CB9E) for highlights and CTAs
- **Normalize.css**: Included for consistent cross-browser styling

### Navigation
- **Main Menu**: Home, FMAR Design, Rules Development, Collaboration, Documentation
- **Breadcrumbs**: Clear navigation paths
- **Active States**: Visual indication of current page

### Collaboration Features
- **GitHub Integration**: Direct links to Issues and Discussions
- **Working Group Slides**: Download sections for each rules page
- **Terms of Reference**: Prominent signposting for governance
- **Feedback Mechanisms**: Multiple ways to provide input

## Setup Instructions

### 1. Repository Setup
1. Create a new GitHub repository named `your-username.github.io`
2. Upload all files maintaining the exact folder structure
3. Enable GitHub Pages in repository settings

### 2. File Upload
1. **Main Files**: Upload `index.html`, `styles/main.css`, `scripts/main.js`
2. **Pages**: Upload all HTML files in the `pages/` directory structure
3. **Assets**: Create `assets/` folder for documents and slides (optional)

### 3. Configuration
1. **GitHub Links**: Update all GitHub repository links to match your repository
2. **Contact Information**: Update contact details in footer
3. **Analytics**: Add Google Analytics if desired (commented in JavaScript)

### 4. Content Population
1. **Documents**: Replace placeholder content with actual documents
2. **Slides**: Upload working group presentation files
3. **Terms of Reference**: Add actual TOR documents
4. **Images**: Add any required images to `assets/images/`

## Customization

### Colors
Update the CSS variables in `styles/main.css`:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
#74CB9E

/* Text colors */
#333 (dark text)
#666 (medium text)
#ccc (light text)
```

### Navigation
Update navigation links in each HTML file's header section.

### GitHub Integration
Update all GitHub links to point to your repository:
```html
<a href="https://github.com/your-username/your-repo/issues">Issues</a>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Optimized CSS**: Minified and efficient
- **Fast Loading**: Minimal JavaScript, optimized images
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Friendly**: Proper meta tags and semantic HTML

## Collaboration Workflow

1. **Document Publication**: Team publishes vX.Y of artefacts
2. **Feedback Collection**: Stakeholders use GitHub Issues
3. **Discussion**: Clarifications and broader points addressed
4. **Refinement**: Changes incorporated offline
5. **New Version**: Updated artefacts published
6. **Issue Closure**: Feedback addressed and issues closed

## Support

For technical support or questions about the website:
- Create an issue in the GitHub repository
- Contact the development team
- Check the collaboration section for working group information

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built for Elexon Market Facilitator**  
*Enabling collaboration on GB flexibility markets development*
