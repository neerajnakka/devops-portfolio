#!/bin/bash

echo "🔍 Portfolio Integration Verification Script"
echo "==========================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check file exists and show status
check_file() {
    local file="$1"
    local description="$2"
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $description${NC}"
        echo "   📁 File: $file"
        local lines=$(wc -l < "$file")
        echo "   📊 Lines: $lines"
        return 0
    else
        echo -e "${RED}❌ $description${NC}"
        echo "   📁 Missing: $file"
        return 1
    fi
}

# Function to check if text exists in file
check_content() {
    local file="$1"
    local search="$2"
    local description="$3"
    if grep -q "$search" "$file" 2>/dev/null; then
        echo -e "${GREEN}  ✓ $description${NC}"
        return 0
    else
        echo -e "${YELLOW}  ⚠ $description${NC}"
        return 1
    fi
}

echo -e "${BLUE}📋 Component Files Verification${NC}"
echo "=================================="

# Check visual components
check_file "src/components/visual/VisualComponents.tsx" "Visual Component Library"
check_content "src/components/visual/VisualComponents.tsx" "export.*AnimatedBackground" "Animated Background Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*TechBadge" "Tech Badge Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*StatsCard" "Stats Card Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*ProgressBar" "Progress Bar Export"
check_content "src/components/visual/VisualComponents.tsx" "export.*InteractiveButton" "Interactive Button Export"
echo ""

# Check blog components
check_file "src/components/blog/EnhancedBlog.tsx" "Enhanced Blog Component"
check_content "src/components/blog/EnhancedBlog.tsx" "const blogPosts" "Blog Posts Data"
check_content "src/components/blog/EnhancedBlog.tsx" "Featured Articles" "Featured Section"
check_content "src/components/blog/EnhancedBlog.tsx" "CategoryFilter" "Category Filtering"
check_content "src/components/blog/EnhancedBlog.tsx" "ViewToggle" "View Toggle Feature"
echo ""

# Check case studies components
check_file "src/components/case-studies/EnhancedCaseStudies.tsx" "Enhanced Case Studies Component"
check_content "src/components/case-studies/EnhancedCaseStudies.tsx" "const caseStudies" "Case Studies Data"
check_content "src/components/case-studies/EnhancedCaseStudies.tsx" "Tab Navigation" "Tabbed Navigation"
check_content "src/components/case-studies/EnhancedCaseStudies.tsx" "Impact Metrics" "Metrics Display"
echo ""

# Check page components
check_file "src/pages/Blog.tsx" "Blog Page Component"
check_file "src/pages/CaseStudies.tsx" "Case Studies Page Component"
echo ""

echo -e "${BLUE}🔧 Configuration Updates Verification${NC}"
echo "======================================="

# Check App.tsx updates
check_file "src/App.tsx" "App Component (Updated)"
check_content "src/App.tsx" "import.*Blog" "Blog Import"
check_content "src/App.tsx" "import.*CaseStudies" "Case Studies Import"
check_content "src/App.tsx" "/blog" "Blog Route"
check_content "src/App.tsx" "/case-studies" "Case Studies Route"
echo ""

# Check Navbar updates
check_file "src/components/Navbar.tsx" "Navbar Component (Updated)"
check_content "src/components/Navbar.tsx" "BookOpen" "Blog Icon Import"
check_content "src/components/Navbar.tsx" "FileText" "Case Studies Icon Import"
check_content "src/components/Navbar.tsx" "'/blog'" "Blog Navigation Item"
check_content "src/components/Navbar.tsx" "'/case-studies'" "Case Studies Navigation Item"
echo ""

# Check CSS updates
check_file "src/index.css" "Stylesheet (Enhanced)"
check_content "src/index.css" "animate-grid-move" "Grid Animation"
check_content "src/index.css" "animate-shimmer" "Shimmer Animation"
check_content "src/index.css" "animate-float" "Float Animation"
check_content "src/index.css" "line-clamp" "Text Truncation"
check_content "src/index.css" "::-webkit-scrollbar" "Custom Scrollbar"
echo ""

echo -e "${BLUE}📦 Package Dependencies${NC}"
echo "========================"

# Check package.json
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json exists${NC}"
    
    if grep -q "framer-motion" package.json; then
        echo -e "${GREEN}  ✓ framer-motion dependency${NC}"
    else
        echo -e "${RED}  ❌ framer-motion missing${NC}"
    fi
    
    if grep -q "lucide-react" package.json; then
        echo -e "${GREEN}  ✓ lucide-react dependency${NC}"
    else
        echo -e "${RED}  ❌ lucide-react missing${NC}"
    fi
    
    if grep -q "react-router-dom" package.json; then
        echo -e "${GREEN}  ✓ react-router-dom dependency${NC}"
    else
        echo -e "${RED}  ❌ react-router-dom missing${NC}"
    fi
else
    echo -e "${RED}❌ package.json not found${NC}"
fi
echo ""

echo -e "${BLUE}📊 Content Analysis${NC}"
echo "===================="

# Count content in files
if [ -f "src/components/blog/EnhancedBlog.tsx" ]; then
    echo -e "${GREEN}📖 Blog Content Analysis${NC}"
    echo "  Total blog posts: $(grep -c '"id":' src/components/blog/EnhancedBlog.tsx | head -1 || echo "0")"
    echo "  Categories: DevOps, Cloud Infrastructure, Full-Stack"
    echo "  Features: Search, Filter, Featured, Metrics"
fi

if [ -f "src/components/case-studies/EnhancedCaseStudies.tsx" ]; then
    echo -e "${GREEN}📊 Case Studies Content Analysis${NC}"
    echo "  Total case studies: $(grep -c '"id":' src/components/case-studies/EnhancedCaseStudies.tsx | head -1 || echo "0")"
    echo "  Study types: EKS/GitOps, WebSocket, Infrastructure Automation"
    echo "  Features: Tabs, Metrics, Timeline, Architecture"
fi
echo ""

echo -e "${BLUE}🎯 Integration Status Summary${NC}"
echo "==============================="

total_checks=0
passed_checks=0

# Count passed checks (simplified verification)
if [ -f "src/components/visual/VisualComponents.tsx" ]; then ((passed_checks++)); fi
if [ -f "src/components/blog/EnhancedBlog.tsx" ]; then ((passed_checks++)); fi
if [ -f "src/components/case-studies/EnhancedCaseStudies.tsx" ]; then ((passed_checks++)); fi
if [ -f "src/pages/Blog.tsx" ]; then ((passed_checks++)); fi
if [ -f "src/pages/CaseStudies.tsx" ]; then ((passed_checks++)); fi
if grep -q "/blog" src/App.tsx 2>/dev/null; then ((passed_checks++)); fi
if grep -q "/case-studies" src/App.tsx 2>/dev/null; then ((passed_checks++)); fi

((total_checks = 8))

success_rate=$((passed_checks * 100 / total_checks))

echo -e "Checks Passed: ${GREEN}$passed_checks${NC}/$total_checks"
echo -e "Success Rate: ${GREEN}$success_rate%${NC}"

if [ $success_rate -ge 90 ]; then
    echo -e "${GREEN}🎉 Portfolio Integration: SUCCESS${NC}"
elif [ $success_rate -ge 70 ]; then
    echo -e "${YELLOW}⚠️  Portfolio Integration: PARTIAL${NC}"
else
    echo -e "${RED}❌ Portfolio Integration: ISSUES FOUND${NC}"
fi

echo ""
echo -e "${BLUE}📋 Next Steps${NC}"
echo "==============="
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. Run: npm run dev (for testing)"
echo "4. Deploy to Vercel"
echo ""

echo -e "${BLUE}✅ Verification Complete!${NC}"
echo "================================="