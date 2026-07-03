import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiGo, SiHtml5, SiCss, SiNestjs, SiSpringboot,
  SiNextdotjs, SiReact, SiVuedotjs, SiAngular, SiPostgresql, SiMysql, SiRedis,
  SiKubernetes, SiArgo, SiDocker, SiTerraform, SiGithubactions, SiGitlab, SiVercel,
  SiGit, SiNginx, SiTailwindcss, SiSupabase, SiJira, SiNodedotjs, SiStrapi,
  SiCloudflare,
} from "react-icons/si";
import { LuCloud, LuDatabase, LuServer } from "react-icons/lu";

// Brand icon + a color tuned to read against a white background.
// Tech without an official mark (Echo, Oracle, AWS, SQL) uses a neutral generic glyph.
export const techIcons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#C9A100" },
  Go: { Icon: SiGo, color: "#0091AF" },
  Java: { Icon: FaJava, color: "#E76F00" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  SQL: { Icon: LuDatabase, color: "#7C3AED" },

  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Echo: { Icon: LuServer, color: "#7C3AED" },
  "Next.js": { Icon: SiNextdotjs, color: "#111111" },
  ReactJS: { Icon: SiReact, color: "#149ECA" },
  VueJS: { Icon: SiVuedotjs, color: "#36A772" },
  Angular: { Icon: SiAngular, color: "#DD0031" },

  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Oracle: { Icon: LuDatabase, color: "#C74634" },
  Redis: { Icon: SiRedis, color: "#D82C20" },

  AWS: { Icon: LuCloud, color: "#E8821E" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  ArgoCD: { Icon: SiArgo, color: "#EF7B4D" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Terraform: { Icon: SiTerraform, color: "#7B42BC" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "GitLab CI": { Icon: SiGitlab, color: "#FC6D26" },
  Cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  Vercel: { Icon: SiVercel, color: "#111111" },

  Git: { Icon: SiGit, color: "#F05032" },
  nginx: { Icon: SiNginx, color: "#009639" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Supabase: { Icon: SiSupabase, color: "#2B9D6E" },
  Jira: { Icon: SiJira, color: "#0052CC" },

  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Strapi: { Icon: SiStrapi, color: "#4945FF" },
};
