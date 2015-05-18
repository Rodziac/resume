#YSCore Google Closure Compile Progress.

import subprocess

def projectBuild():

	#Create project build command.
	args = [
		"python",
		"../../public/js/closure-library/closure/bin/build/closurebuilder.py",
		"--root", "../../public/",
		"--namespace", "RESU.Bootstrapper",
		"--output_mode", "compiled",
		"--output_file", "../../public/production/js/compiled.js",
		"--compiler_jar", "../compiler/compiler.jar",
		"--compiler_flags", "--compilation_level=ADVANCED_OPTIMIZATIONS",
		"--compiler_flags", "--output_wrapper='(function(){%output%})()'",
		"--compiler_flags", "--define=goog.LOCALE='EN'",
		"--compiler_flags", "--define=goog.DEBUG=false",
		"--compiler_flags", "--jscomp_error=accessControls",
		"--compiler_flags", "--jscomp_error=checkRegExp",
		"--compiler_flags", "--jscomp_error=checkTypes",
		"--compiler_flags", "--jscomp_error=checkVars",
		"--compiler_flags", "--jscomp_error=invalidCasts",
		"--compiler_flags", "--jscomp_error=missingProperties",
		"--compiler_flags", "--jscomp_error=nonStandardJsDocs",
		"--compiler_flags", "--jscomp_error=strictModuleDepCheck",
		"--compiler_flags", "--jscomp_error=undefinedVars",
		"--compiler_flags", "--jscomp_error=unknownDefines",
		"--compiler_flags", "--jscomp_error=visibility",
		"--compiler_flags", "--js=../mappings/renaming_map.js",
		"--compiler_flags", "--js=../../public/js/closure-library/closure/goog/deps.js"
	]

	#Run closurebuilder.py with parameters
	runCommand = subprocess.Popen(args)
	runCommand.wait()

	#Completed report
	print("Google Closure Compile Progress Completed.")
