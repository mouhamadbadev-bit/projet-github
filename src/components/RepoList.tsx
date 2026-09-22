// src/components/RepoList.tsx
import type { GithubRepo } from '../types/github';
import RepoCard from './RepoCard';

interface RepoListProps {
  repos: GithubRepo[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return <p className="text-gray-400 text-center">Aucun dépôt public trouvé.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-6">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}