print('^4Natural [LOADINGSCREEN] | ^0v 0.0.1 | ^4Started')

local ThenSpawn = false

AddEventHandler("playerSpawned", function () 	
	if not ThenSpawn then
		ShutdownLoadingScreenNui()		
	end
end)