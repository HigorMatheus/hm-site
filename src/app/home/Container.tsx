/* eslint-disable @next/next/no-img-element */
'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { api } from '@/services/api';

// import { api } from '@/services/api';
// import { User } from '@/services/mirage';
// import { queryClient } from '@/services/queryClient';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];
export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface Root {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: any;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export function Container() {
  const test = useQuery(
    ['listUsers'],
    async () => {
      const response = await api.get('/users');
      console.log(response.data);
      return response.data;
    },
    // {
    //   staleTime: 1000 * 60 * 10, // 10 minutes
    // },
  );
  const { data, refetch } = useQuery(
    ['users'],
    async () => {
      const response = await axios.get<Array<Root>>(
        'https://api.github.com/users/higormatheus/repos',
      );
      console.log(response);
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
  console.log('test', test, 'data', data);
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Your content */}
            <button onClick={() => refetch()}>recarregar</button>
            <a
              href={'/'}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              home
            </a>
            <a
              href="/home/app"
              className="m-8 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              test
            </a>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {data?.map((person) => (
              <li key={person.id} className="flex justify-between py-5 gap-x-6">
                <div className="flex gap-x-4">
                  <div className="flex-auto min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                      {person.size}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end"></div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
