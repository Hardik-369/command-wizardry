export interface Command {
  id: string;
  name: string;
  description: string;
  syntax: string;
  location: "Built-in" | "System32" | "Other";
  examples: string[];
  category: string;
  featured?: boolean;
}

export const commands: Command[] = [
  {
    id: "cd",
    name: "cd",
    description: "Changes the current directory or displays the current directory path.",
    syntax: "cd [path]",
    location: "Built-in",
    examples: [
      "cd C:\\Users",
      "cd ..",
      "cd \\",
    ],
    category: "Navigation",
    featured: true,
  },
  {
    id: "dir",
    name: "dir",
    description: "Displays a list of files and subdirectories in a directory.",
    syntax: "dir [drive:][path][filename]",
    location: "Built-in",
    examples: [
      "dir",
      "dir /a",
      "dir *.txt",
    ],
    category: "File Management",
    featured: true,
  },
  {
    "id": "accept",
    "name": "accept",
    "description": "Configures security access policies for resources (e.g., shares).",
    "syntax": "accept [options]",
    "location": "System32",
    "examples": [
      "accept /grant user1",
      "accept /deny user2"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "attrib",
    "name": "attrib",
    "description": "Changes file attributes (read-only, hidden, archive, etc.).",
    "syntax": "attrib [+r|-r] [+h|-h] [+s|-s] [+a|-a] [file_name]",
    "location": "Built-in",
    "examples": [
      "attrib +h myfile.txt",
      "attrib -r myfile.txt",
      "attrib +s +h myfile.txt"
    ],
    "category": "File Management",
    "featured": true
  },
  {
    "id": "bitsadmin",
    "name": "bitsadmin",
    "description": "Manages Background Intelligent Transfer Service (BITS) jobs.",
    "syntax": "bitsadmin /create [job_name]",
    "location": "System32",
    "examples": [
      "bitsadmin /create MyJob",
      "bitsadmin /addfile MyJob file:///C:/path/to/file"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "bootcfg",
    "name": "bootcfg",
    "description": "Configures boot settings (replaced by bcdedit).",
    "syntax": "bootcfg [options]",
    "location": "System32",
    "examples": [
      "bootcfg /rebuild",
      "bootcfg /add /path C:\\Windows"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "certreq",
    "name": "certreq",
    "description": "Manages certificate requests.",
    "syntax": "certreq [options]",
    "location": "System32",
    "examples": [
      "certreq -new request.inf request.req",
      "certreq -submit request.req"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "certutil",
    "name": "certutil",
    "description": "Manages certificates, certificate authority (CA), and keys.",
    "syntax": "certutil [options]",
    "location": "System32",
    "examples": [
      "certutil -store my",
      "certutil -verify certificate.crt"
    ],
    "category": "Security",
    "featured": true
  },
  {
    "id": "chkntfs",
    "name": "chkntfs",
    "description": "Configures or displays the automatic disk checking at startup.",
    "syntax": "chkntfs [drive:][options]",
    "location": "Built-in",
    "examples": [
      "chkntfs C:",
      "chkntfs /X C:"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "choice",
    "name": "choice",
    "description": "Prompts user input in batch scripts and provides a selection menu.",
    "syntax": "choice [/C choices] [/N] [/M prompt]",
    "location": "Built-in",
    "examples": [
      "choice /C ABC /M \"Pick an option\"",
      "choice /N /M \"Yes or No?\""
    ],
    "category": "Scripting",
    "featured": false
  },
  {
    "id": "comp",
    "name": "comp",
    "description": "Compares the contents of two files and displays the differences.",
    "syntax": "comp [file1] [file2]",
    "location": "Built-in",
    "examples": [
      "comp file1.txt file2.txt",
      "comp /a file1.txt file2.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "compact",
    "name": "compact",
    "description": "Displays or changes the compression state of files and directories.",
    "syntax": "compact [/C | /U] [/S:directory] [/A] [/I] [/F] [file_name]",
    "location": "Built-in",
    "examples": [
      "compact /C /S:C:\\Files",
      "compact /U myfile.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "conhost",
    "name": "conhost",
    "description": "Console host process for Command Prompt (technical).",
    "syntax": "conhost [options]",
    "location": "System32",
    "examples": [
      "conhost",
      "conhost /c"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "date",
    "name": "date",
    "description": "Displays or sets the system date.",
    "syntax": "date [MM-DD-YYYY]",
    "location": "Built-in",
    "examples": [
      "date 12-25-2024",
      "date"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "fc",
    "name": "fc",
    "description": "Compares two files and displays the differences.",
    "syntax": "fc [file1] [file2]",
    "location": "Built-in",
    "examples": [
      "fc file1.txt file2.txt",
      "fc /b file1.bin file2.bin"
    ],
    "category": "File Management",
    "featured": true
  },
  {
    "id": "find",
    "name": "find",
    "description": "Searches for a text string in a file or files.",
    "syntax": "find \"string\" [file_name]",
    "location": "Built-in",
    "examples": [
      "find \"error\" logfile.txt",
      "find \"OK\" *.log"
    ],
    "category": "Search",
    "featured": false
  },
  {
    "id": "fixmbr",
    "name": "fixmbr",
    "description": "Repairs the Master Boot Record of a partition.",
    "syntax": "fixmbr [drive]",
    "location": "System32",
    "examples": [
      "fixmbr C:",
      "fixmbr D:"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "fltmc",
    "name": "fltmc",
    "description": "Manages Filter Manager control operations.",
    "syntax": "fltmc [command] [options]",
    "location": "System32",
    "examples": [
      "fltmc load myfilter",
      "fltmc unload myfilter"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "fsutil",
    "name": "fsutil",
    "description": "Performs advanced file system tasks such as hardlink management.",
    "syntax": "fsutil [options]",
    "location": "System32",
    "examples": [
      "fsutil hardlink create link.txt file.txt",
      "fsutil file setshortname file.txt shortname.txt"
    ],
    "category": "File Management",
    "featured": true
  },
  {
    "id": "getmac",
    "name": "getmac",
    "description": "Displays the MAC addresses of the system's network adapters.",
    "syntax": "getmac [options]",
    "location": "System32",
    "examples": [
      "getmac",
      "getmac /s \\computername"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "gpresult",
    "name": "gpresult",
    "description": "Displays the result of applied Group Policy settings.",
    "syntax": "gpresult [options]",
    "location": "System32",
    "examples": [
      "gpresult /R",
      "gpresult /H report.html"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "icacls",
    "name": "icacls",
    "description": "Displays, modifies, or backups file system ACLs.",
    "syntax": "icacls [file_name] [options]",
    "location": "System32",
    "examples": [
      "icacls file.txt",
      "icacls folder /grant username:F"
    ],
    "category": "Security",
    "featured": true
  },
  {
    "id": "ie4uinit",
    "name": "ie4uinit",
    "description": "Manages Internet Explorer settings (legacy).",
    "syntax": "ie4uinit [options]",
    "location": "System32",
    "examples": [
      "ie4uinit",
      "ie4uinit -clear"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "ipconfig",
    "name": "ipconfig",
    "description": "Displays and configures network interface settings.",
    "syntax": "ipconfig [options]",
    "location": "System32",
    "examples": [
      "ipconfig",
      "ipconfig /all",
      "ipconfig /release"
    ],
    "category": "Networking",
    "featured": true
  },
  {
    "id": "klist",
    "name": "klist",
    "description": "Lists Kerberos tickets for the current user session.",
    "syntax": "klist [options]",
    "location": "System32",
    "examples": [
      "klist",
      "klist tgt"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "ktpass",
    "name": "ktpass",
    "description": "Configures Kerberos keytab files.",
    "syntax": "ktpass [options]",
    "location": "System32",
    "examples": [
      "ktpass /princ user@domain.com /mapuser user /pass *",
      "ktpass /export keytabfile"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "logoff",
    "name": "logoff",
    "description": "Logs off the current user or a specified session.",
    "syntax": "logoff [session_id]",
    "location": "System32",
    "examples": [
      "logoff",
      "logoff 2"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "msg",
    "name": "msg",
    "description": "Sends messages to other users on the network.",
    "syntax": "msg [username] [message]",
    "location": "Built-in",
    "examples": [
      "msg username Hello",
      "msg * Hello all users"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "nbtstat",
    "name": "nbtstat",
    "description": "Displays NetBIOS over TCP/IP statistics.",
    "syntax": "nbtstat [options]",
    "location": "System32",
    "examples": [
      "nbtstat -n",
      "nbtstat -a 192.168.1.1"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "netcfg",
    "name": "netcfg",
    "description": "Installs network components.",
    "syntax": "netcfg [options]",
    "location": "System32",
    "examples": [
      "netcfg -s",
      "netcfg -v"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "netstat",
    "name": "netstat",
    "description": "Displays network connections, routing tables, and statistics.",
    "syntax": "netstat [options]",
    "location": "System32",
    "examples": [
      "netstat",
      "netstat -a",
      "netstat -s"
    ],
    "category": "Networking",
    "featured": true
  },
  {
    "id": "nltest",
    "name": "nltest",
    "description": "Tests secure channel connections for domain controllers.",
    "syntax": "nltest [options]",
    "location": "System32",
    "examples": [
      "nltest /sc_query:domainname",
      "nltest /dsgetdc:domainname"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "nslookup",
    "name": "nslookup",
    "description": "Queries DNS servers for domain name resolution.",
    "syntax": "nslookup [hostname]",
    "location": "System32",
    "examples": [
      "nslookup google.com",
      "nslookup -type=mx example.com"
    ],
    "category": "Networking",
    "featured": true
  },
  {
    "id": "perfmon",
    "name": "perfmon",
    "description": "Opens the Performance Monitor tool.",
    "syntax": "perfmon [options]",
    "location": "System32",
    "examples": [
      "perfmon",
      "perfmon /report"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "powercfg",
    "name": "powercfg",
    "description": "Configures power management settings.",
    "syntax": "powercfg [options]",
    "location": "System32",
    "examples": [
      "powercfg /hibernate on",
      "powercfg /change standby-timeout-ac 20"
    ],
    "category": "System Configuration",
    "featured": true
  },
  {
    "id": "print",
    "name": "print",
    "description": "Sends a file to a printer.",
    "syntax": "print [options] [file_name]",
    "location": "Built-in",
    "examples": [
      "print document.txt",
      "print /d:\\printer_name document.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "pushd",
    "name": "pushd",
    "description": "Saves the current directory and changes to a new one.",
    "syntax": "pushd [path]",
    "location": "Built-in",
    "examples": [
      "pushd C:\\Users",
      "pushd .."
    ],
    "category": "Navigation",
    "featured": false
  },
  {
    "id": "popd",
    "name": "popd",
    "description": "Restores the previous directory saved by pushd.",
    "syntax": "popd",
    "location": "Built-in",
    "examples": [
      "popd",
      "popd"
    ],
    "category": "Navigation",
    "featured": false
  },
  {
    "id": "quser",
    "name": "quser",
    "description": "Displays information about user sessions.",
    "syntax": "quser [session_id]",
    "location": "Built-in",
    "examples": [
      "quser",
      "quser 1"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "rmdir",
    "name": "rmdir",
    "description": "Removes a directory.",
    "syntax": "rmdir [path]",
    "location": "Built-in",
    "examples": [
      "rmdir C:\\folder",
      "rmdir /s /q C:\\folder"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "robocopy",
    "name": "robocopy",
    "description": "Robust file and directory copy.",
    "syntax": "robocopy [source] [destination] [options]",
    "location": "System32",
    "examples": [
      "robocopy C:\\source D:\\destination",
      "robocopy C:\\source D:\\destination /E"
    ],
    "category": "File Management",
    "featured": true
  },
  {
    "id": "setx",
    "name": "setx",
    "description": "Sets environment variables permanently.",
    "syntax": "setx [variable_name] [value]",
    "location": "System32",
    "examples": [
      "setx PATH \"C:\\Program Files\\App\"",
      "setx VAR_NAME value"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "shadow",
    "name": "shadow",
    "description": "Monitors Remote Desktop sessions.",
    "syntax": "shadow [session_id]",
    "location": "System32",
    "examples": [
      "shadow 1",
      "shadow 2"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "shutdown",
    "name": "shutdown",
    "description": "Shuts down or restarts the system.",
    "syntax": "shutdown [options]",
    "location": "System32",
    "examples": [
      "shutdown /s /f",
      "shutdown /r"
    ],
    "category": "System Tools",
    "featured": true
  },
  {
    "id": "syskey",
    "name": "syskey",
    "description": "Secures the Windows account database (deprecated).",
    "syntax": "syskey [options]",
    "location": "System32",
    "examples": [
      "syskey",
      "syskey -update"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "telnet",
    "name": "telnet",
    "description": "Opens a Telnet client for remote connections.",
    "syntax": "telnet [hostname]",
    "location": "System32",
    "examples": [
      "telnet example.com",
      "telnet 192.168.1.1"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "tracerpt",
    "name": "tracerpt",
    "description": "Processes event trace logs.",
    "syntax": "tracerpt [options]",
    "location": "System32",
    "examples": [
      "tracerpt /min 10",
      "tracerpt trace.etl"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "tree",
    "name": "tree",
    "description": "Displays a graphical directory tree.",
    "syntax": "tree [path]",
    "location": "Built-in",
    "examples": [
      "tree",
      "tree C:\\"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "typeperf",
    "name": "typeperf",
    "description": "Writes system performance data to the command window or a log file.",
    "syntax": "typeperf [counter]",
    "location": "System32",
    "examples": [
      "typeperf",
      "typeperf \\Processor(_Total)\\% Processor Time"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "verifier",
    "name": "verifier",
    "description": "Configures and monitors Windows Driver Verifier.",
    "syntax": "verifier [options]",
    "location": "System32",
    "examples": [
      "verifier /standard",
      "verifier /query"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "vssadmin",
    "name": "vssadmin",
    "description": "Manages Volume Shadow Copy services.",
    "syntax": "vssadmin [options]",
    "location": "System32",
    "examples": [
      "vssadmin list shadows",
      "vssadmin delete shadows /for=C:"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "wbadmin",
    "name": "wbadmin",
    "description": "Configures and manages Windows backups.",
    "syntax": "wbadmin [options]",
    "location": "System32",
    "examples": [
      "wbadmin start backup",
      "wbadmin stop job"
    ],
    "category": "Backup and Recovery",
    "featured": true
  },
  {
    "id": "w32tm",
    "name": "w32tm",
    "description": "Configures Windows Time service.",
    "syntax": "w32tm [options]",
    "location": "System32",
    "examples": [
      "w32tm /query",
      "w32tm /resync"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "xwizard",
    "name": "xwizard",
    "description": "Configures cross-wizard settings for applications.",
    "syntax": "xwizard [options]",
    "location": "System32",
    "examples": [
      "xwizard",
      "xwizard -settings"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "arp",
    "name": "arp",
    "description": "Displays or modifies the ARP cache.",
    "syntax": "arp [options]",
    "location": "System32",
    "examples": [
      "arp -a",
      "arp -d 192.168.1.1"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "assoc",
    "name": "assoc",
    "description": "Displays or modifies file extension associations.",
    "syntax": "assoc [.ext=[file_type]]",
    "location": "Built-in",
    "examples": [
      "assoc .txt=txtfile",
      "assoc .jpg=jpegfile"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "auditpol",
    "name": "auditpol",
    "description": "Displays or modifies audit policy settings.",
    "syntax": "auditpol [options]",
    "location": "System32",
    "examples": [
      "auditpol /get /category:Logon/Logoff",
      "auditpol /set /subcategory:Logon/Logoff /success:enable"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "bcdedit",
    "name": "bcdedit",
    "description": "Manages Boot Configuration Data (BCD).",
    "syntax": "bcdedit [options]",
    "location": "System32",
    "examples": [
      "bcdedit /enum",
      "bcdedit /set {current} safeboot minimal"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "cacls",
    "name": "cacls",
    "description": "Displays or modifies file access control lists (replaced by icacls).",
    "syntax": "cacls [filename] [/options]",
    "location": "System32",
    "examples": [
      "cacls C:\\folder",
      "cacls C:\\folder /E /P user:N"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "clip",
    "name": "clip",
    "description": "Redirects Command Prompt output to the clipboard.",
    "syntax": "command | clip",
    "location": "System32",
    "examples": [
      "dir | clip",
      "echo Hello | clip"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "cmdkey",
    "name": "cmdkey",
    "description": "Manages stored usernames and passwords.",
    "syntax": "cmdkey /add:[target] /user:[username] /pass:[password]",
    "location": "System32",
    "examples": [
      "cmdkey /add:server /user:admin /pass:password",
      "cmdkey /list"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "convert",
    "name": "convert",
    "description": "Converts FAT volumes to NTFS.",
    "syntax": "convert [drive:] /fs:ntfs",
    "location": "Built-in",
    "examples": [
      "convert C: /fs:ntfs"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "cprofile",
    "name": "cprofile",
    "description": "Manages and analyzes application performance profiles.",
    "syntax": "cprofile [options]",
    "location": "System32",
    "examples": [
      "cprofile create myprofile",
      "cprofile analyze myprofile"
    ],
    "category": "Performance",
    "featured": false
  },
  {
    "id": "dism",
    "name": "dism",
    "description": "Manages Windows images and deployment packages.",
    "syntax": "dism [options]",
    "location": "System32",
    "examples": [
      "dism /online /cleanup-image /restorehealth",
      "dism /mount-wim /wimfile:C:\\image.wim /index:1"
    ],
    "category": "System Tools",
    "featured": true
  },
  {
    "id": "driverquery",
    "name": "driverquery",
    "description": "Displays a list of installed device drivers.",
    "syntax": "driverquery [options]",
    "location": "System32",
    "examples": [
      "driverquery",
      "driverquery /v"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "efsutil",
    "name": "efsutil",
    "description": "Manages encrypted file system settings and files.",
    "syntax": "efsutil [options]",
    "location": "System32",
    "examples": [
      "efsutil rekey /s C:\\folder",
      "efsutil /start"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "eventtriggers",
    "name": "eventtriggers",
    "description": "Creates event-based triggers (deprecated).",
    "syntax": "eventtriggers [options]",
    "location": "System32",
    "examples": [
      "eventtriggers /create /name:mytrigger",
      "eventtriggers /delete"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "expand",
    "name": "expand",
    "description": "Extracts files from compressed .CAB files.",
    "syntax": "expand [source] [destination]",
    "location": "Built-in",
    "examples": [
      "expand myfile.cab -F:* C:\\extracted\\"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "findstr",
    "name": "findstr",
    "description": "Searches for strings in files (more advanced than find).",
    "syntax": "findstr [options] [string] [files]",
    "location": "Built-in",
    "examples": [
      "findstr /i \"error\" log.txt",
      "findstr /s \"test\" *.txt"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "forfiles",
    "name": "forfiles",
    "description": "Selects and executes a command on multiple files.",
    "syntax": "forfiles /p [path] /m [mask] /c [command]",
    "location": "System32",
    "examples": [
      "forfiles /p C:\\folder /m *.txt /c \"cmd /c del @file\""
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "freedisk",
    "name": "freedisk",
    "description": "Displays the amount of free disk space.",
    "syntax": "freedisk",
    "location": "System32",
    "examples": [
      "freedisk"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "gpupdate",
    "name": "gpupdate",
    "description": "Updates Group Policy settings.",
    "syntax": "gpupdate [options]",
    "location": "System32",
    "examples": [
      "gpupdate",
      "gpupdate /force"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "lodctr",
    "name": "lodctr",
    "description": "Updates performance counter settings.",
    "syntax": "lodctr [options]",
    "location": "System32",
    "examples": [
      "lodctr /r"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "logman",
    "name": "logman",
    "description": "Manages and schedules performance logs.",
    "syntax": "logman [options]",
    "location": "System32",
    "examples": [
      "logman start mylog",
      "logman stop mylog"
    ],
    "category": "Performance",
    "featured": false
  },
  {
    "id": "makecab",
    "name": "makecab",
    "description": "Compresses files into .CAB format.",
    "syntax": "makecab [source] [destination]",
    "location": "System32",
    "examples": [
      "makecab file.txt file.cab"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "mode",
    "name": "mode",
    "description": "Configures system devices such as COM ports.",
    "syntax": "mode [device] [options]",
    "location": "System32",
    "examples": [
      "mode COM1:9600,n,8,1",
      "mode con:cols=80 lines=25"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "nfsadmin",
    "name": "nfsadmin",
    "description": "Manages Network File System (NFS) settings.",
    "syntax": "nfsadmin [options]",
    "location": "System32",
    "examples": [
      "nfsadmin server start",
      "nfsadmin server stop"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "openfiles",
    "name": "openfiles",
    "description": "Displays files opened remotely and disconnects them if necessary.",
    "syntax": "openfiles [options]",
    "location": "System32",
    "examples": [
      "openfiles",
      "openfiles /disconnect"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "pathping",
    "name": "pathping",
    "description": "Traces network paths and reports packet loss.",
    "syntax": "pathping [options] [target]",
    "location": "System32",
    "examples": [
      "pathping google.com",
      "pathping -n google.com"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "query",
    "name": "query",
    "description": "Displays information about system resources such as sessions and processes.",
    "syntax": "query [options]",
    "location": "Built-in",
    "examples": [
      "query session",
      "query process"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "recimg",
    "name": "recimg",
    "description": "Creates custom recovery images (Windows 8 feature).",
    "syntax": "recimg /create [image_path]",
    "location": "System32",
    "examples": [
      "recimg /create C:\\RecoveryImage"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "regini",
    "name": "regini",
    "description": "Modifies the Windows Registry via text files.",
    "syntax": "regini [file]",
    "location": "System32",
    "examples": [
      "regini myregfile.reg"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "regsvr32",
    "name": "regsvr32",
    "description": "Registers or unregisters DLL and ActiveX controls.",
    "syntax": "regsvr32 [options] [file]",
    "location": "System32",
    "examples": [
      "regsvr32 myfile.dll",
      "regsvr32 /u myfile.dll"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "sc",
    "name": "sc",
    "description": "Manages Windows services.",
    "syntax": "sc [command] [service] [options]",
    "location": "System32",
    "examples": [
      "sc start service_name",
      "sc stop service_name"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "setlocal",
    "name": "setlocal",
    "description": "Begins localization of environment changes in a batch file.",
    "syntax": "setlocal",
    "location": "Built-in",
    "examples": [
      "setlocal",
      "setlocal enabledelayedexpansion"
    ],
    "category": "Batch Scripting",
    "featured": false
  },
  {
    "id": "slmgr.vbs",
    "name": "slmgr.vbs",
    "description": "Manages Windows activation and licensing.",
    "syntax": "slmgr.vbs [options]",
    "location": "System32",
    "examples": [
      "slmgr.vbs /ipk <product_key>",
      "slmgr.vbs /dli"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "start",
    "name": "start",
    "description": "Starts a separate window to run a specified program or command.",
    "syntax": "start [program]",
    "location": "Built-in",
    "examples": [
      "start notepad",
      "start chrome"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "subst",
    "name": "subst",
    "description": "Maps a folder to a drive letter.",
    "syntax": "subst [drive:] [path]",
    "location": "Built-in",
    "examples": [
      "subst X: C:\\Users\\Username\\Documents",
      "subst Z: /d"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "takeown",
    "name": "takeown",
    "description": "Takes ownership of a file or directory.",
    "syntax": "takeown /f [file/directory] [/r]",
    "location": "System32",
    "examples": [
      "takeown /f C:\\folder",
      "takeown /f C:\\folder /r"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "tasklist",
    "name": "tasklist",
    "description": "Displays a list of currently running processes.",
    "syntax": "tasklist [options]",
    "location": "System32",
    "examples": [
      "tasklist",
      "tasklist /fi \"STATUS eq running\""
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "type",
    "name": "type",
    "description": "Displays the contents of a text file.",
    "syntax": "type [file]",
    "location": "Built-in",
    "examples": [
      "type myfile.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "ver",
    "name": "ver",
    "description": "Displays the current Windows version.",
    "syntax": "ver",
    "location": "Built-in",
    "examples": [
      "ver"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "vol",
    "name": "vol",
    "description": "Displays the volume label and serial number of a disk.",
    "syntax": "vol [drive:]",
    "location": "Built-in",
    "examples": [
      "vol C:"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "wevtutil",
    "name": "wevtutil",
    "description": "Manages event logs and publishers.",
    "syntax": "wevtutil [options]",
    "location": "System32",
    "examples": [
      "wevtutil qe Application",
      "wevtutil clear-log System"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "where",
    "name": "where",
    "description": "Locates and displays the path of files.",
    "syntax": "where [file]",
    "location": "System32",
    "examples": [
      "where notepad.exe",
      "where *.txt"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "wmic",
    "name": "wmic",
    "description": "Executes Windows Management Instrumentation (WMI) commands.",
    "syntax": "wmic [namespace] [class] [options]",
    "location": "System32",
    "examples": [
      "wmic process list",
      "wmic cpu get name"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "xcopy",
    "name": "xcopy",
    "description": "Copies files and directories, including subdirectories.",
    "syntax": "xcopy [source] [destination] [options]",
    "location": "Built-in",
    "examples": [
      "xcopy C:\\folder D:\\backup /s /e",
      "xcopy C:\\data.txt D:\\ /y"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "append",
    "name": "append",
    "description": "Sets a directory path for programs to search for data files.",
    "syntax": "append [path]",
    "location": "Built-in",
    "examples": [
      "append C:\\myfolder"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "attrib",
    "name": "attrib",
    "description": "Displays or changes file attributes (e.g., hidden, read-only).",
    "syntax": "attrib [options] [file]",
    "location": "Built-in",
    "examples": [
      "attrib +h myfile.txt",
      "attrib -r myfile.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "bcdboot",
    "name": "bcdboot",
    "description": "Creates or repairs system partitions and boot files.",
    "syntax": "bcdboot [source] [/s [system partition]] [/f firmware]",
    "location": "System32",
    "examples": [
      "bcdboot C:\\Windows"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "chkntfs",
    "name": "chkntfs",
    "description": "Displays or modifies the automatic disk check on startup.",
    "syntax": "chkntfs [options] [drive]",
    "location": "System32",
    "examples": [
      "chkntfs C:",
      "chkntfs /X C:"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "compact",
    "name": "compact",
    "description": "Displays or modifies NTFS file compression.",
    "syntax": "compact [options] [file]",
    "location": "System32",
    "examples": [
      "compact /c C:\\file.txt",
      "compact /u C:\\file.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "diskpart",
    "name": "diskpart",
    "description": "Manages disk partitions interactively.",
    "syntax": "diskpart",
    "location": "System32",
    "examples": [
      "diskpart",
      "diskpart list disk"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "dispdiag",
    "name": "dispdiag",
    "description": "Saves a display-related troubleshooting file to the current directory.",
    "syntax": "dispdiag",
    "location": "System32",
    "examples": [
      "dispdiag"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "dosx",
    "name": "dosx",
    "description": "Enables DOS XMS support (used in older Windows versions).",
    "syntax": "dosx",
    "location": "System32",
    "examples": [
      "dosx"
    ],
    "category": "Legacy Tools",
    "featured": false
  },
  {
    "id": "driverquery",
    "name": "driverquery",
    "description": "Displays a list of installed device drivers and their properties.",
    "syntax": "driverquery [options]",
    "location": "System32",
    "examples": [
      "driverquery",
      "driverquery /fo list"
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "edit",
    "name": "edit",
    "description": "Launches a text editor for files (not available in 64-bit Windows).",
    "syntax": "edit [file]",
    "location": "Built-in",
    "examples": [
      "edit myfile.txt"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "eventcreate",
    "name": "eventcreate",
    "description": "Creates a custom event in the Windows Event Log.",
    "syntax": "eventcreate /id [event ID] /l [log name] /t [event type] /d [event description]",
    "location": "System32",
    "examples": [
      "eventcreate /id 100 /l Application /t Information /d \"My custom event\""
    ],
    "category": "System Tools",
    "featured": false
  },
  {
    "id": "finger",
    "name": "finger",
    "description": "Displays information about users on a network (if supported).",
    "syntax": "finger [options] [user@host]",
    "location": "System32",
    "examples": [
      "finger user@hostname"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "fltmc",
    "name": "fltmc",
    "description": "Manages and displays filter drivers.",
    "syntax": "fltmc [options]",
    "location": "System32",
    "examples": [
      "fltmc",
      "fltmc instances"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "ftp",
    "name": "ftp",
    "description": "Transfers files to and from a remote FTP server.",
    "syntax": "ftp [hostname]",
    "location": "System32",
    "examples": [
      "ftp ftp.server.com",
      "ftp -s:ftp_commands.txt"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "hostname",
    "name": "hostname",
    "description": "Displays the hostname of the computer.",
    "syntax": "hostname",
    "location": "System32",
    "examples": [
      "hostname"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "iexpress",
    "name": "iexpress",
    "description": "Creates self-extracting and self-installing packages.",
    "syntax": "iexpress",
    "location": "System32",
    "examples": [
      "iexpress"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "iscsicli",
    "name": "iscsicli",
    "description": "Manages iSCSI sessions and devices.",
    "syntax": "iscsicli [command]",
    "location": "System32",
    "examples": [
      "iscsicli session",
      "iscsicli list target"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "klist",
    "name": "klist",
    "description": "Displays Kerberos tickets and allows purging them.",
    "syntax": "klist [options]",
    "location": "System32",
    "examples": [
      "klist",
      "klist purge"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "label",
    "name": "label",
    "description": "Creates, changes, or deletes the volume label for a disk.",
    "syntax": "label [drive:] [label]",
    "location": "Built-in",
    "examples": [
      "label C: MyDisk",
      "label C:"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "memmaker",
    "name": "memmaker",
    "description": "Optimizes memory for MS-DOS applications (older systems only).",
    "syntax": "memmaker",
    "location": "Built-in",
    "examples": [
      "memmaker"
    ],
    "category": "Legacy Tools",
    "featured": false
  },
  {
    "id": "netcfg",
    "name": "netcfg",
    "description": "Installs network components and protocols.",
    "syntax": "netcfg [options]",
    "location": "System32",
    "examples": [
      "netcfg -v"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "ntbackup",
    "name": "ntbackup",
    "description": "Manages backups (not available in newer Windows versions).",
    "syntax": "ntbackup [options]",
    "location": "System32",
    "examples": [
      "ntbackup backup"
    ],
    "category": "Backup Tools",
    "featured": false
  },
  {
    "id": "ntsd",
    "name": "ntsd",
    "description": "Debugs processes and applications (replaced by newer tools).",
    "syntax": "ntsd [options]",
    "location": "System32",
    "examples": [
      "ntsd -g"
    ],
    "category": "Debugging",
    "featured": false
  },
  {
    "id": "path",
    "name": "path",
    "description": "Displays or sets the search path for executables.",
    "syntax": "path [path]",
    "location": "Built-in",
    "examples": [
      "path",
      "path C:\\Program Files\\Java\\bin"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "pendmoves",
    "name": "pendmoves",
    "description": "Displays file rename and delete operations pending reboot.",
    "syntax": "pendmoves",
    "location": "System32",
    "examples": [
      "pendmoves"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "perfview",
    "name": "perfview",
    "description": "Views performance and diagnostics data.",
    "syntax": "perfview [options]",
    "location": "System32",
    "examples": [
      "perfview start",
      "perfview collect"
    ],
    "category": "Performance Monitoring",
    "featured": false
  },
  {
    "id": "pkgmgr",
    "name": "pkgmgr",
    "description": "Installs, uninstalls, or configures Windows packages.",
    "syntax": "pkgmgr /ip /pkg:<package_name>",
    "location": "System32",
    "examples": [
      "pkgmgr /ip /pkg:example.msi"
    ],
    "category": "Package Management",
    "featured": false
  },
  {
    "id": "powercfg",
    "name": "powercfg",
    "description": "Configures power settings and policies.",
    "syntax": "powercfg [options]",
    "location": "System32",
    "examples": [
      "powercfg -energy",
      "powercfg -h off"
    ],
    "category": "Power Management",
    "featured": false
  },
  {
    "id": "pwlauncher",
    "name": "pwlauncher",
    "description": "Configures Windows To Go startup options.",
    "syntax": "pwlauncher [options]",
    "location": "System32",
    "examples": [
      "pwlauncher -start",
      "pwlauncher -shutdown"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "qappsrv",
    "name": "qappsrv",
    "description": "Displays all available terminal servers on the network.",
    "syntax": "qappsrv",
    "location": "System32",
    "examples": [
      "qappsrv"
    ],
    "category": "Network Management",
    "featured": false
  },
  {
    "id": "relog",
    "name": "relog",
    "description": "Extracts performance counters from a log file.",
    "syntax": "relog <source_file> -f <output_file>",
    "location": "System32",
    "examples": [
      "relog perf_log.blg -f output.csv"
    ],
    "category": "Performance Monitoring",
    "featured": false
  },
  {
    "id": "robocopy",
    "name": "robocopy",
    "description": "Copies files and directories with more advanced features than xcopy.",
    "syntax": "robocopy <source> <destination> [options]",
    "location": "System32",
    "examples": [
      "robocopy C:\\source D:\\destination /E"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "schtasks",
    "name": "schtasks",
    "description": "Manages scheduled tasks on a local or remote computer.",
    "syntax": "schtasks /create /tn <task_name> /tr <task_run>",
    "location": "System32",
    "examples": [
      "schtasks /create /tn \"MyTask\" /tr \"C:\\task.bat\" /sc daily"
    ],
    "category": "Task Management",
    "featured": false
  },
  {
    "id": "secedit",
    "name": "secedit",
    "description": "Configures and analyzes system security policies.",
    "syntax": "secedit /analyze /cfg <config_file>",
    "location": "System32",
    "examples": [
      "secedit /analyze /cfg secedit.inf"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "sigverif",
    "name": "sigverif",
    "description": "Verifies the integrity of drivers and system files.",
    "syntax": "sigverif",
    "location": "System32",
    "examples": [
      "sigverif"
    ],
    "category": "System Security",
    "featured": false
  },
  {
    "id": "smbutil",
    "name": "smbutil",
    "description": "Manages SMB network shares.",
    "syntax": "smbutil [options]",
    "location": "System32",
    "examples": [
      "smbutil //server/share"
    ],
    "category": "Network Management",
    "featured": false
  },
  {
    "id": "syskey",
    "name": "syskey",
    "description": "Secures the Windows account database. (Deprecated in newer systems.)",
    "syntax": "syskey [options]",
    "location": "System32",
    "examples": [
      "syskey"
    ],
    "category": "System Security",
    "featured": false
  },
  {
    "id": "taskkill",
    "name": "taskkill",
    "description": "Terminates tasks or processes by process ID or name.",
    "syntax": "taskkill /PID <pid> /F",
    "location": "System32",
    "examples": [
      "taskkill /PID 1234 /F"
    ],
    "category": "Task Management",
    "featured": false
  },
  {
    "id": "tlntadmn",
    "name": "tlntadmn",
    "description": "Manages Telnet server parameters.",
    "syntax": "tlntadmn [options]",
    "location": "System32",
    "examples": [
      "tlntadmn"
    ],
    "category": "Network Management",
    "featured": false
  },
  {
    "id": "typeperf",
    "name": "typeperf",
    "description": "Writes performance counter data to the Command Prompt or a log file.",
    "syntax": "typeperf <counter> [options]",
    "location": "System32",
    "examples": [
      "typeperf \"\\Processor(_Total)\\% Processor Time\""
    ],
    "category": "Performance Monitoring",
    "featured": false
  },
  {
    "id": "vds",
    "name": "vds",
    "description": "Manages the Virtual Disk Service.",
    "syntax": "vds [options]",
    "location": "System32",
    "examples": [
      "vds"
    ],
    "category": "Disk Management",
    "featured": false
  },
  {
    "id": "vmstat",
    "name": "vmstat",
    "description": "Displays virtual memory statistics.",
    "syntax": "vmstat",
    "location": "System32",
    "examples": [
      "vmstat"
    ],
    "category": "System Monitoring",
    "featured": false
  },
  {
    "id": "w32tm",
    "name": "w32tm",
    "description": "Configures or queries the Windows Time service.",
    "syntax": "w32tm [options]",
    "location": "System32",
    "examples": [
      "w32tm /query",
      "w32tm /config"
    ],
    "category": "Time Management",
    "featured": false
  },
  {
    "id": "waitfor",
    "name": "waitfor",
    "description": "Sends or waits for a signal across a network.",
    "syntax": "waitfor [signal_name]",
    "location": "Built-in",
    "examples": [
      "waitfor signal1"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "whoami",
    "name": "whoami",
    "description": "Displays the current logged-in user and security groups.",
    "syntax": "whoami",
    "location": "System32",
    "examples": [
      "whoami"
    ],
    "category": "User Management",
    "featured": false
  },
  {
    "id": "wusa",
    "name": "wusa",
    "description": "Installs or uninstalls Windows updates.",
    "syntax": "wusa <update_file>",
    "location": "System32",
    "examples": [
      "wusa C:\\updates\\update.msu"
    ],
    "category": "System Maintenance",
    "featured": false
  },
  {
    "id": "at",
    "name": "at",
    "description": "Schedules commands and programs to run on a computer.",
    "syntax": "at [\\computer] time command",
    "location": "System32",
    "examples": [
      "at 15:00 myprogram.exe"
    ],
    "category": "Task Scheduling",
    "featured": false
  },
  {
    "id": "bitsadmin",
    "name": "bitsadmin",
    "description": "Manages Background Intelligent Transfer Service (BITS) jobs.",
    "syntax": "bitsadmin [options] [jobname] [jobid]",
    "location": "System32",
    "examples": [
      "bitsadmin /transfer mydownload /download /priority high"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "bootcfg",
    "name": "bootcfg",
    "description": "Modifies the boot.ini file (used in older Windows versions).",
    "syntax": "bootcfg /[options]",
    "location": "System32",
    "examples": [
      "bootcfg /rebuild"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "break",
    "name": "break",
    "description": "Enables or disables CTRL+C checking in batch scripts.",
    "syntax": "break [on|off]",
    "location": "Built-in",
    "examples": [
      "break on"
    ],
    "category": "Batch Scripting",
    "featured": false
  },
  {
    "id": "cscript",
    "name": "cscript",
    "description": "Executes scripts via Windows Script Host.",
    "syntax": "cscript scriptname [arguments]",
    "location": "System32",
    "examples": [
      "cscript myscript.vbs"
    ],
    "category": "Scripting",
    "featured": false
  },
  {
    "id": "diskperf",
    "name": "diskperf",
    "description": "Enables or disables disk performance counters.",
    "syntax": "diskperf [options]",
    "location": "System32",
    "examples": [
      "diskperf -y"
    ],
    "category": "Performance",
    "featured": false
  },
  {
    "id": "expand",
    "name": "expand",
    "description": "Extracts files from compressed .CAB files.",
    "syntax": "expand [source] [destination]",
    "location": "System32",
    "examples": [
      "expand myfile.cab -F:* C:\\extracted\\"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "fsutil",
    "name": "fsutil",
    "description": "Displays and configures file system properties.",
    "syntax": "fsutil [options]",
    "location": "System32",
    "examples": [
      "fsutil behavior query"
    ],
    "category": "File System",
    "featured": false
  },
  {
    "id": "getmac",
    "name": "getmac",
    "description": "Displays the MAC address of the system’s network interfaces.",
    "syntax": "getmac /s computername",
    "location": "System32",
    "examples": [
      "getmac /v"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "icacls",
    "name": "icacls",
    "description": "Displays or modifies file and folder permissions.",
    "syntax": "icacls [file] [/options]",
    "location": "System32",
    "examples": [
      "icacls myfile.txt /grant User:(R)"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "lodctr",
    "name": "lodctr",
    "description": "Updates or displays performance counter settings in the system registry.",
    "syntax": "lodctr [options]",
    "location": "System32",
    "examples": [
      "lodctr /R"
    ],
    "category": "Performance",
    "featured": false
  },
  {
    "id": "logoff",
    "name": "logoff",
    "description": "Logs off a user from the system.",
    "syntax": "logoff [sessionid | username]",
    "location": "System32",
    "examples": [
      "logoff 1"
    ],
    "category": "User Management",
    "featured": false
  },
  {
    "id": "mem",
    "name": "mem",
    "description": "Displays system memory usage (not available in 64-bit Windows).",
    "syntax": "mem",
    "location": "System32",
    "examples": [
      "mem"
    ],
    "category": "System Monitoring",
    "featured": false
  },
  {
    "id": "msiexec",
    "name": "msiexec",
    "description": "Configures, installs, or repairs Windows Installer applications.",
    "syntax": "msiexec [options]",
    "location": "System32",
    "examples": [
      "msiexec /i myapp.msi"
    ],
    "category": "Software Installation",
    "featured": false
  },
  {
    "id": "net",
    "name": "net",
    "description": "Manages network resources (e.g., users, shares, and services).",
    "syntax": "net [command] [options]",
    "location": "Built-in",
    "examples": [
      "net user myuser"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "netsh",
    "name": "netsh",
    "description": "Configures network interfaces, firewalls, and routing.",
    "syntax": "netsh [context] [command]",
    "location": "System32",
    "examples": [
      "netsh interface ip set address \"Local Area Connection\" static 192.168.1.100"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "nslookup",
    "name": "nslookup",
    "description": "Queries DNS servers for domain name or IP address information.",
    "syntax": "nslookup [hostname]",
    "location": "System32",
    "examples": [
      "nslookup www.example.com"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "path",
    "name": "path",
    "description": "Displays or sets the command search path for executables.",
    "syntax": "path [pathname]",
    "location": "Built-in",
    "examples": [
      "path C:\\Program Files\\MyApp"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "perfmon",
    "name": "perfmon",
    "description": "Launches the Performance Monitor application.",
    "syntax": "perfmon [options]",
    "location": "System32",
    "examples": [
      "perfmon"
    ],
    "category": "Performance",
    "featured": false
  },
  {
    "id": "powershell",
    "name": "powershell",
    "description": "Launches a Windows PowerShell session.",
    "syntax": "powershell",
    "location": "System32",
    "examples": [
      "powershell"
    ],
    "category": "Scripting",
    "featured": false
  },
  {
    "id": "qprocess",
    "name": "qprocess",
    "description": "Displays information about processes running on a system.",
    "syntax": "qprocess",
    "location": "System32",
    "examples": [
      "qprocess"
    ],
    "category": "System Monitoring",
    "featured": false
  },
  {
    "id": "qwinsta",
    "name": "qwinsta",
    "description": "Displays information about sessions on a Remote Desktop Session Host.",
    "syntax": "qwinsta [hostname]",
    "location": "System32",
    "examples": [
      "qwinsta /server:myserver"
    ],
    "category": "Remote Desktop",
    "featured": false
  },
  {
    "id": "replace",
    "name": "replace",
    "description": "Replaces files in a directory.",
    "syntax": "replace [source] [destination]",
    "location": "Built-in",
    "examples": [
      "replace myfile.txt C:\\files\\"
    ],
    "category": "File Management",
    "featured": false
  },
  {
    "id": "rundll32",
    "name": "rundll32",
    "description": "Executes DLL functions in a Windows environment.",
    "syntax": "rundll32 [dll] [entrypoint] [arguments]",
    "location": "System32",
    "examples": [
      "rundll32 shell32.dll,Control_RunDLL desk.cpl"
    ],
    "category": "System Management",
    "featured": false
  },
  {
    "id": "setx",
    "name": "setx",
    "description": "Sets environment variables persistently for the user or system.",
    "syntax": "setx [variable] [value] [/m]",
    "location": "System32",
    "examples": [
      "setx PATH \"C:\\MyTools\" /m"
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "shadow",
    "name": "shadow",
    "description": "Enables monitoring of Remote Desktop sessions.",
    "syntax": "shadow [sessionid]",
    "location": "System32",
    "examples": [
      "shadow 1"
    ],
    "category": "Remote Desktop",
    "featured": false
  },
  {
    "id": "shutdown",
    "name": "shutdown",
    "description": "Shuts down or restarts the computer.",
    "syntax": "shutdown [options]",
    "location": "System32",
    "examples": [
      "shutdown /r /t 0"
    ],
    "category": "System Management",
    "featured": false
  },
  {
    "id": "takeown",
    "name": "takeown",
    "description": "Takes ownership of files or directories.",
    "syntax": "takeown /f [filename]",
    "location": "System32",
    "examples": [
      "takeown /f C:\\myfolder"
    ],
    "category": "Security",
    "featured": false
  },
  {
    "id": "taskview",
    "name": "taskview",
    "description": "Opens the Task View feature.",
    "syntax": "taskview",
    "location": "System32",
    "examples": [
      "taskview"
    ],
    "category": "User Interface",
    "featured": false
  },
  {
    "id": "title",
    "name": "title",
    "description": "Sets the title for the Command Prompt window.",
    "syntax": "title [newtitle]",
    "location": "Built-in",
    "examples": [
      "title My Command Prompt"
    ],
    "category": "User Interface",
    "featured": false
  },
  {
    "id": "tsdiscon",
    "name": "tsdiscon",
    "description": "Disconnects a Remote Desktop session.",
    "syntax": "tsdiscon [sessionid]",
    "location": "System32",
    "examples": [
      "tsdiscon 1"
    ],
    "category": "Remote Desktop",
    "featured": false
  },
  {
    "id": "tzutil",
    "name": "tzutil",
    "description": "Configures or queries the time zone settings.",
    "syntax": "tzutil /[option] [timezone]",
    "location": "System32",
    "examples": [
      "tzutil /s \"UTC\""
    ],
    "category": "System Configuration",
    "featured": false
  },
  {
    "id": "vssadmin",
    "name": "vssadmin",
    "description": "Displays or manages shadow copy backups.",
    "syntax": "vssadmin [options]",
    "location": "System32",
    "examples": [
      "vssadmin list shadows"
    ],
    "category": "Backup & Recovery",
    "featured": false
  },
  {
    "id": "wbadmin",
    "name": "wbadmin",
    "description": "Manages backup and recovery operations.",
    "syntax": "wbadmin [options]",
    "location": "System32",
    "examples": [
      "wbadmin start backup -backupTarget:E: -include:C: -quiet"
    ],
    "category": "Backup & Recovery",
    "featured": false
  },
  {
    "id": "winrm",
    "name": "winrm",
    "description": "Configures Windows Remote Management service.",
    "syntax": "winrm [options]",
    "location": "System32",
    "examples": [
      "winrm quickconfig"
    ],
    "category": "Networking",
    "featured": false
  },
  {
    "id": "xwizard",
    "name": "xwizard",
    "description": "Executes Extensible Wizard commands.",
    "syntax": "xwizard [options]",
    "location": "System32",
    "examples": [
      "xwizard"
    ],
    "category": "User Interface",
    "featured": false
  },
  
  
  
];

export const featuredCommands = commands.filter(cmd => cmd.featured);
