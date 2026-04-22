# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- Solution URL: [https://github.com/iheb1919/coutries_with_api](https://github.com/iheb1919/coutries_with_api)
- Live Site URL: [https://iheb1919-countries-api.vercel.app](https://iheb1919-countries-api.vercel.app) (Update with your actual URL)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Development Tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack React Query](https://tanstack.com/query/latest) - Data fetching and state management
- [React Router](https://reactrouter.com/) - Declarative routing

### What I learned

During this project, I learned how to effectively use **TanStack React Query** for data fetching and caching. It simplified the state management for API calls, especially when handling search and filtering.

I also explored **Tailwind CSS v4** for styling, utilizing its new features for a more streamlined development process.

Example of using React Query with a search debounce:

```typescript
export const useGetCoutries = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const debounceValue = useDebounce(searchInput, 500);

    const { data: countriesData, isLoading, isError } = useQuery<CountrySummary[]>({
        queryKey: ['countries', debounceValue, region],
        queryFn: () => getCountriesData(debounceValue, region),
        retry: false
    });
    // ...
}
```

### AI Collaboration

I collaborated with **Antigravity** (Google Deepmind's AI assistant) to:
- Set up the initial project structure and routing.
- Implement the dark/light mode toggle using React Context.
- Debug API fetching logic and optimize image loading.
- Refactor components for better reusability and performance.

The collaboration helped speed up the development process significantly, especially with boilerplate code and CSS layouts.

## Author

- Frontend Mentor - [@iheb1919](https://www.frontendmentor.io/profile/iheb1919)

