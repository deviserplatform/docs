# Get Started

>[!NOTE]
>This guide assumes that readers is familier with ASP.NET Core, C#, any of the supported Databases and Operating Systems mentioned below.

## How to install from package
1. Make sure that <a href="https://www.microsoft.com/net/download" target="_blank">.NET Core SDK 2.1</a> has been installed
2. Download the package from github [release](https://github.com/deviserplatform/deviserplatform/releases)
3. Open terminal and enter the command `dotnet Deviser.WI.dll`
4. Open `http://localhost:5000`
5. Follow the installation steps
6. Once the Deviser Platform has been installed, start adding contents and modules. Read more on [Page](pages/index.md)

## How to install from source
### Prerequisites
Deviser Platform is developed on .NET Core and the front-end build tool is based on node.js framework. Therefore, kindly install the following frameworks: 
1. Install <a href="https://www.microsoft.com/net/download" target="_blank">.NET Core SDK 2.1</a>
2. Install <a href="https://nodejs.org" target="_blank">Node.js</a>
3. Install bower `npm install -g bower` 
4. Install gulp-cli `npm install --global gulp-cli`
5. Choose an editor ([Visual Studio](https://visualstudio.microsoft.com/vs/) or [Visual Studio Code](https://code.visualstudio.com/))

### Build from source (Visual Studio)
1. Clone this repository
`git clone https://github.com/deviserplatform/deviserplatform.git`
2. Open DeviserPlatform.sln. Once opened packages will be installed, this may take few minutes
3. Run the Deviser.WI application
4. Follow the Deviser Platform installation steps
5. Once the Deviser Platform has been installed, start adding contents and modules. Read more on [Page](pages/index.md)

### Build from source (Visual Studio Code)
1. Clone this repository
`git clone https://github.com/deviserplatform/deviserplatform.git`
2. Run Deviser Platform 
`dotnet run`
3. Follow the Deviser Platform installation steps
4. Once the Deviser Platform has been installed, start adding contents and modules. Read more on [Page](pages/index.md)


## Suppoted Operating Systems
Deviser Platform is cross-platform which supports following operating systems:
1. Windows, <a href="https://docs.microsoft.com/en-us/dotnet/core/windows-prerequisites?tabs=netcore2x" target="_blank">versions</a>
2. macOS, <a href="https://docs.microsoft.com/en-us/dotnet/core/macos-prerequisites?tabs=netcore2x" target="_blank">versions</a>
3. Linux, <a href="https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x" target="_blank">versions</a>

## Supported Databases
Deviser Platform is not only cross-platform, but also supports more databases as follows:
1. SQL Server, <a href="https://docs.microsoft.com/en-us/ef/core/providers/sql-server/index" target="_blank">versions</a>
2. SQL Server Local DB, <a href="https://docs.microsoft.com/en-us/ef/core/providers/sql-server/index" target="_blank">versions</a>
3. MySQL, <a href="https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql" target="_blank">versions</a>
4. PostgreSQL, <a href="http://www.npgsql.org/doc/compatibility.html" target="_blank">versions</a>
