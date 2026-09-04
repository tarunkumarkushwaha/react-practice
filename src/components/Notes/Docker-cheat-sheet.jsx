export default function DockerCheatSheet() {
  const dockerCommands = [
    {
      cmd: "docker --version",
      desc: "Checked if the Windows Docker daemon was active and responding.",
    },
    {
      cmd: "docker build -t tchat-docker-image .",
      desc: "Baked your Dockerfile recipe into an image template named tchat-docker-image.",
    },
    {
      cmd: "docker run -p 3000:3000 --name run-tchat-docker-image tchat-docker-image",
      desc: "Created and booted a container, linking Windows port 3000 to internal port 3000.",
    },
    {
      cmd: "docker run -p 3000:3000 --name run-tchat-docker-image --rm tchat-docker-image",
      desc: "Same as above, but automatically removed the container when stopped.",
    },
    {
      cmd: "docker create -p 3000:3000 --name run-tchat-docker-image tchat-docker-image",
      desc: "Created a container without starting it.",
    },
    {
      cmd: "docker start run-tchat-docker-image",
      desc: "Started an existing stopped container.",
    },
    {
      cmd: "docker start -a run-tchat-docker-image",
      desc: "Started and attached to the container logs.",
    },
    {
      cmd: "docker stop run-tchat-docker-image",
      desc: "Stopped the running container.",
    },
    {
      cmd: "docker ps",
      desc: "Displayed all running containers.",
    },
    {
      cmd: "docker ps -a",
      desc: "Displayed all containers including stopped ones.",
    },
    {
      cmd: "docker rm run-tchat-docker-image",
      desc: "Removed a stopped container.",
    },
    {
      cmd: "docker rm -f run-tchat-docker-image",
      desc: "Force removed a running container.",
    },
  ];

  const composeCommands = [
    {
      cmd: "docker compose up",
      desc: "Started backend and frontend together.",
    },
    {
      cmd: "docker compose up --build",
      desc: "Rebuilt Docker images before starting services.",
    },
    {
      cmd: "docker compose down",
      desc: "Stopped services and removed the compose network.",
    },
  ];

  const Table = ({ data }) => (
    <div className="overflow-x-auto rounded-xl border border-slate-700">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-slate-900">
          <tr>
            <th className="border-b border-slate-700 p-4 text-left text-cyan-400">
              Command
            </th>
            <th className="border-b border-slate-700 p-4 text-left text-cyan-400">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="transition hover:bg-slate-800/60"
            >
              <td className="border-b border-slate-800 p-4 align-top">
                <code className="rounded bg-slate-800 px-2 py-1 text-green-400">
                  {item.cmd}
                </code>
              </td>

              <td className="border-b border-slate-800 p-4 text-slate-300">
                {item.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-12 text-center">
          <h1 className="mb-3 text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🐳 Docker & Compose Cheat Sheet
          </h1>

          <p className="text-lg text-slate-400">
            Your personalized reference guide for the T-chat MERN ecosystem
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Docker */}

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-lg">

            <h2 className="mb-2 text-2xl font-bold text-cyan-400">
              🚀 Single-Container Commands
            </h2>

            <p className="mb-6 text-slate-400">
              Manage individual Docker containers directly.
            </p>

            <Table data={dockerCommands} />

          </div>

          {/* Compose */}

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-lg">

            <h2 className="mb-2 text-2xl font-bold text-purple-400">
              📦 Docker Compose Commands
            </h2>

            <p className="mb-6 text-slate-400">
              Manage multi-container applications.
            </p>

            <Table data={composeCommands} />

            <div className="mt-8 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5">
              <h3 className="mb-2 font-bold text-amber-400">
                💡 Pro Tip
              </h3>

              <p className="text-slate-300 leading-7">
                Since your <code className="text-green-400">docker-compose.yml</code> uses{" "}
                <code className="text-green-400">volumes</code>, source code changes
                are reflected instantly. Use{" "}
                <code className="text-green-400">docker compose up --build</code>{" "}
                only when dependencies change (like editing{" "}
                <code className="text-green-400">package.json</code>).
              </p>
            </div>

          </div>

        </div>

        <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          Built for T-chat Development Environment • Docker Quick Reference
        </footer>

      </div>
    </div>
  );
}