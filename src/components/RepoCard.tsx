// src/components/RepoCard.tsx
import type { GithubRepo } from '../types/github';

interface RepoCardProps {
  repo: GithubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 rounded-xl border border-gray-800 text-white flex flex-col justify-between transition-transform hover:-translate-y-1 shadow-md"
      style={{
        background: 'linear-gradient(95deg, #111729 3%, #1d1b48 99.61%)',
      }}
    >
      <div>
        <h3 className="font-bold text-lg text-blue-400 mb-2">{repo.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {repo.description || "Aucune description disponible."}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-400">
        {repo.language && <span>💻 {repo.language}</span>}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🔀 {repo.forks_count}</span>
      </div>
    </a>
  );
}