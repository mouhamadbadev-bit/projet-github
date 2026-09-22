// src/components/ProfileCard.tsx
import type { GithubUser } from '../types/github';

interface ProfileCardProps {
  user: GithubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-white max-w-sm mx-auto shadow-xl flex flex-col items-center text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 shadow-md"
      />
      <h2 className="text-xl font-bold">{user.name || user.login}</h2>
      <p className="text-gray-400 text-sm mb-4">@{user.login}</p>
      
      {user.bio && <p className="text-gray-300 text-sm mb-6">{user.bio}</p>}

      <div className="flex justify-around w-full bg-gray-800/50 py-3 rounded-lg mb-6 text-sm">
        <div>
          <span className="block font-bold text-white">{user.followers}</span>
          <span className="text-gray-400 text-xs">Abonnés</span>
        </div>
        <div>
          <span className="block font-bold text-white">{user.following}</span>
          <span className="text-gray-400 text-xs">Abonnements</span>
        </div>
        <div>
          <span className="block font-bold text-white">{user.public_repos}</span>
          <span className="text-gray-400 text-xs">Dépôts</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm font-medium transition-colors"
      >
        Voir sur GitHub
      </a>
    </div>
  );
}