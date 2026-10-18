// src/hooks/useGithub.ts
import { useState, useEffect } from 'react';
import {type GithubUser, type GithubRepo } from '../types/github.ts';

export function useGithub(username: string) {
  const [profile, setProfile] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username.trim()) return;

    const fetchGithubData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. Récupérer le profil
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
          Authorization: `Bearer ${tu dois importer token}`,
          },

          });
        if (!userRes.ok) {
          throw new Error("Utilisateur introuvable sur GitHub.");
        }
        const userData: GithubUser = await userRes.json();
        setProfile(userData);

        // 2. Récupérer les dépôts
        const reposRes =  await fetch(`https://api.github.com/users/${username}/repos?per_page=6`, {
         headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },

        });
        if (!reposRes.ok) {
          throw new Error("Impossible de récupérer les dépôts.");
        }
        const reposData: GithubRepo[] = await reposRes.json();
        setRepos(reposData);

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur est survenue.");
        }
        setProfile(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  return { profile, repos, loading, error };
}
