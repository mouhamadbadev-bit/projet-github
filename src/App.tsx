// src/App.tsx
import { useState } from 'react';
import { useGithub } from './hooks/useGithub.ts';
import SearchHeader from './components/SearchHeader.tsx';
import ProfileCard from './components/ProfileCard.tsx';
import RepoList from './components/RepoList.tsx';
import './index.css';

export default function App() {
  const [username, setUsername] = useState('octocat'); // Valeur par défaut
  const { profile, repos, loading, error } = useGithub(username);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-2">GitHub Profile Finder</h1>
        
        {/* Barre de recherche */}
        <SearchHeader onSearch={(newUsername) => setUsername(newUsername)} />

        {/* États de chargement et d'erreur */}
        {loading && <p className="text-center text-blue-400 my-8">Chargement en cours...</p>}
        {error && <p className="text-center text-red-400 my-8">{error}</p>}

        {/* Affichage du profil et des repos */}
        {!loading && !error && profile && (
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <ProfileCard user={profile} />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-4">Dépôts récents</h2>
              <RepoList repos={repos} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}