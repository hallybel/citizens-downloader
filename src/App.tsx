import { useState } from 'react';
import { Download, Users, Server, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const MINECRAFT_VERSIONS = [
  { version: '1.21.4', build: '3685' },
  { version: '1.21.3', build: '3684' },
  { version: '1.21.2', build: '3683' },
  { version: '1.21.1', build: '3682' },
  { version: '1.21.0', build: '3681' },
  { version: '1.20.4', build: '3317' },
  { version: '1.20.2', build: '3315' },
  { version: '1.20.1', build: '3314' },
  { version: '1.19.4', build: '3175' },
  { version: '1.19.2', build: '3173' },
  { version: '1.18.2', build: '3021' },
  { version: '1.17.1', build: '2877' },
  { version: '1.16.5', build: '2724' },
  { version: '1.15.2', build: '2572' },
  { version: '1.14.4', build: '2423' },
  { version: '1.13.2', build: '2271' },
  { version: '1.12.2', build: '2120' },
  { version: '1.11.2', build: '1968' },
  { version: '1.10.2', build: '1817' },
  { version: '1.9.4', build: '1665' },
  { version: '1.8.8', build: '1514' },
  { version: '1.7.10', build: '1362' },
];

function App() {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedBuild = MINECRAFT_VERSIONS.find(v => v.version === selectedVersion)?.build;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col items-center text-center">
            <Users className="w-20 h-20 text-orange-400 mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Citizens 2 Downloads
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mb-8">
              Download the latest compatible Citizens 2 build for your Minecraft server version
            </p>
          </div>
        </div>
      </div>

      {/* Version Selector */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Select Your Minecraft Version
            </h2>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-gray-700 text-white rounded-lg px-4 py-3 hover:bg-gray-600 transition-colors"
              >
                <span>{selectedVersion || 'Choose version...'}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 transition-transform",
                  isDropdownOpen && "transform rotate-180"
                )} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute w-full mt-2 bg-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {MINECRAFT_VERSIONS.map((version) => (
                    <button
                      key={version.version}
                      onClick={() => {
                        setSelectedVersion(version.version);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-600 text-white transition-colors"
                    >
                      {version.version}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {selectedVersion && selectedBuild && (
            <div className="animate-fadeIn">
              <div className="bg-gray-700 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Compatible Build Found
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300">Build #{selectedBuild}</p>
                    <p className="text-gray-400 text-sm">Compatible with Minecraft {selectedVersion}</p>
                  </div>
                  <a
                    href={`https://ci.citizensnpcs.co/job/Citizens2/${selectedBuild}/`}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Server className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Server Compatible</h3>
            <p className="text-gray-300">Works with Paper, Spigot, and other server implementations</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Create NPCs</h3>
            <p className="text-gray-300">Add interactive NPCs to enhance your server experience</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Download className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Latest Builds</h3>
            <p className="text-gray-300">Always get the most recent compatible version</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Citizens 2 is a plugin for Minecraft servers. This is an unofficial download page.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;